
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { toast } from 'sonner';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  profile: any | null;
  isLoading: boolean;
  signIn: (username: string, password: string) => Promise<void>;
  signUp: (username: string, password: string, userData: any) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (data: any) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast: uiToast } = useToast();

  // Fetch profile data
  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        return null;
      }
      
      return data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      return null;
    }
  };

  // Initialize auth state
  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        console.log('Auth state changed:', event, currentSession);
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        if (currentSession?.user) {
          // Use setTimeout to avoid potential deadlocks
          setTimeout(async () => {
            const profileData = await fetchProfile(currentSession.user.id);
            setProfile(profileData);
          }, 0);
        } else {
          setProfile(null);
        }
        
        setIsLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      console.log('Initial session check:', currentSession);
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      if (currentSession?.user) {
        fetchProfile(currentSession.user.id).then(data => {
          setProfile(data);
        });
      }
      
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Sign in with username and password
  const signIn = async (username: string, password: string) => {
    try {
      setIsLoading(true);
      const { error, data } = await supabase.auth.signInWithPassword({ 
        email: `${username}@example.com`, // Convert username to email format
        password 
      });
      
      if (error) {
        console.error('Sign in error:', error);
        
        toast.error("Sign in failed", {
          description: error.message,
          duration: 3000
        });
        
        throw error;
      }
      
      console.log('Sign in successful:', data);
      
      toast.success("Signed in successfully", {
        description: "Welcome back!"
      });
    } catch (error: any) {
      console.error('Error signing in:', error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Sign up with username and password
  const signUp = async (username: string, password: string, userData: any) => {
    try {
      setIsLoading(true);
      console.log('Signing up with:', username, userData);
      
      // Convert username to email format for Supabase
      const email = `${username}@example.com`;
      
      // Sign up using converted email
      const { data, error } = await supabase.auth.signUp({ 
        email: email,
        password,
        options: {
          data: {
            username: username,
            first_name: userData.firstName,
            last_name: userData.lastName
          }
        }
      });

      console.log('Sign up response:', data, error);

      if (error) {
        toast.error("Sign up failed", {
          description: error.message,
          duration: 3000
        });
        throw error;
      }

      // Check if the user already exists
      if (data.user && data.user.identities && data.user.identities.length === 0) {
        toast.error("Registration failed", {
          description: "This username is already registered. Please try logging in instead.",
          duration: 5000
        });
        return;
      }
      
      // If we have data.session, it means the user was automatically signed in
      if (data.session) {
        toast.success("Account created successfully", {
          description: "You have been signed in automatically.",
          duration: 3000
        });
      } else {
        // Otherwise, tell them to sign in
        toast.success("Account created successfully", {
          description: "You can now sign in with your credentials.",
          duration: 3000
        });
      }
      
      // We want to make sure the profile is created even for sign-ups
      if (data?.user) {
        // We don't need to create the profile manually as our trigger will handle it
        // But we do need to refresh the profile data
        setTimeout(async () => {
          const profileData = await fetchProfile(data.user.id);
          setProfile(profileData);
        }, 500); // Give the database trigger a little time to run
      }
      
    } catch (error: any) {
      console.error('Error signing up:', error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        toast.error("Sign out failed", {
          description: error.message,
          duration: 3000
        });
        throw error;
      }
      
      toast.success("Signed out successfully", {
        description: "You have been logged out",
        duration: 3000
      });
    } catch (error: any) {
      console.error('Error signing out:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Update user profile
  const updateProfile = async (data: any) => {
    try {
      setIsLoading(true);
      if (!user) throw new Error('No user logged in');

      const { error } = await supabase
        .from('profiles')
        .update({
          first_name: data.firstName,
          last_name: data.lastName,
          avatar_url: data.avatarUrl,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);

      if (error) {
        toast.error("Failed to update profile", {
          description: error.message,
          duration: 3000
        });
        throw error;
      }

      // Refresh profile data
      const updatedProfile = await fetchProfile(user.id);
      setProfile(updatedProfile);

      toast.success("Profile updated", {
        description: "Your profile has been updated successfully",
        duration: 3000
      });
    } catch (error: any) {
      console.error('Error updating profile:', error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        profile,
        isLoading,
        signIn,
        signUp,
        signOut,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
