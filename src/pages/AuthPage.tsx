
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';
import { AlertCircle, Lock, User } from 'lucide-react';
import { toast } from 'sonner';

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { signIn, signUp, user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState('login');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Form state for login
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });
  
  // Form state for registration
  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  // Clear error message when changing tabs
  useEffect(() => {
    setErrorMessage(null);
  }, [activeTab]);

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/account');
    }
  }, [user, navigate]);
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    
    if (!loginForm.username.trim()) {
      setErrorMessage('Username is required');
      return;
    }
    
    try {
      console.log('Attempting login with:', loginForm.username);
      await signIn(loginForm.username, loginForm.password);
      // Let the useEffect handle the navigation after successful login
    } catch (error: any) {
      console.error('Login error:', error);
      
      // Display error message in the form
      if (error.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    }
  };
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    
    // Basic validation
    if (!registerForm.username.trim()) {
      setErrorMessage('Username is required');
      return;
    }
    
    if (registerForm.password !== registerForm.confirmPassword) {
      setErrorMessage('Passwords do not match');
      toast.error('Passwords do not match', {
        description: 'Please ensure both passwords are identical'
      });
      return;
    }
    
    if (registerForm.password.length < 6) {
      setErrorMessage('Password is too short');
      toast.error('Password is too short', {
        description: 'Password must be at least 6 characters'
      });
      return;
    }
    
    try {
      console.log('Attempting registration with:', registerForm.username);
      await signUp(
        registerForm.username, 
        registerForm.password, 
        {
          firstName: registerForm.firstName,
          lastName: registerForm.lastName
        }
      );
      
      // After successful registration, switch to login tab if user was not auto-signed in
      // The signUp function will handle the toast notifications
      setActiveTab('login');
      setLoginForm({
        username: registerForm.username,
        password: registerForm.password
      });
      
    } catch (error: any) {
      console.error('Registration error:', error);
      setErrorMessage(error.message || 'Registration failed');
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="mb-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold">My Account</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            {/* Tab navigation for login/register */}
            <div className="flex mb-6 border-b">
              <button
                className={`pb-2 px-4 ${activeTab === 'login' ? 'border-b-2 border-stylio text-stylio' : 'text-gray-600'}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`pb-2 px-4 ${activeTab === 'register' ? 'border-b-2 border-stylio text-stylio' : 'text-gray-600'}`}
                onClick={() => setActiveTab('register')}
              >
                Register
              </button>
            </div>
            
            {/* Error message display */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4 flex items-start">
                <AlertCircle className="text-red-500 h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-red-700 text-sm">{errorMessage}</span>
              </div>
            )}
            
            {/* Login form */}
            {activeTab === 'login' && (
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="login-username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-stylio">
                    <span className="px-3 py-2 text-gray-400">
                      <User className="h-5 w-5" />
                    </span>
                    <Input
                      type="text"
                      id="login-username"
                      value={loginForm.username}
                      onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                      required
                      className="w-full py-2 border-none outline-none focus-visible:ring-0"
                      placeholder="Enter username"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-stylio">
                    <span className="px-3 py-2 text-gray-400">
                      <Lock className="h-5 w-5" />
                    </span>
                    <Input
                      type="password"
                      id="login-password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      required
                      className="w-full py-2 border-none outline-none focus-visible:ring-0"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-stylio hover:bg-stylio/90 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </Button>
              </form>
            )}
            
            {/* Registration form */}
            {activeTab === 'register' && (
              <form onSubmit={handleRegister}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="register-firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-stylio">
                      <span className="px-3 py-2 text-gray-400">
                        <User className="h-5 w-5" />
                      </span>
                      <Input
                        type="text"
                        id="register-firstName"
                        value={registerForm.firstName}
                        onChange={(e) => setRegisterForm({ ...registerForm, firstName: e.target.value })}
                        required
                        className="w-full py-2 border-none outline-none focus-visible:ring-0"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="register-lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-stylio">
                      <span className="px-3 py-2 text-gray-400">
                        <User className="h-5 w-5" />
                      </span>
                      <Input
                        type="text"
                        id="register-lastName"
                        value={registerForm.lastName}
                        onChange={(e) => setRegisterForm({ ...registerForm, lastName: e.target.value })}
                        required
                        className="w-full py-2 border-none outline-none focus-visible:ring-0"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="register-username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-stylio">
                    <span className="px-3 py-2 text-gray-400">
                      <User className="h-5 w-5" />
                    </span>
                    <Input
                      type="text"
                      id="register-username"
                      value={registerForm.username}
                      onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
                      required
                      className="w-full py-2 border-none outline-none focus-visible:ring-0"
                      placeholder="Choose a username"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-stylio">
                    <span className="px-3 py-2 text-gray-400">
                      <Lock className="h-5 w-5" />
                    </span>
                    <Input
                      type="password"
                      id="register-password"
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                      required
                      minLength={6}
                      className="w-full py-2 border-none outline-none focus-visible:ring-0"
                      placeholder="Create password (min. 6 characters)"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="register-confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-stylio">
                    <span className="px-3 py-2 text-gray-400">
                      <Lock className="h-5 w-5" />
                    </span>
                    <Input
                      type="password"
                      id="register-confirmPassword"
                      value={registerForm.confirmPassword}
                      onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                      required
                      minLength={6}
                      className="w-full py-2 border-none outline-none focus-visible:ring-0"
                      placeholder="Confirm password"
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-stylio hover:bg-stylio/90 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthPage;
