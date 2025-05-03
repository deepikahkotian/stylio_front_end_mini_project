
// Product type definition
export type Product = {
  id: string;
  name: string;
  price: number;
  discount?: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  subcategory?: string;
  description?: string;
  sizes?: string[];
  colors?: string[];
  rating?: number;
  reviewCount?: number;
  tags?: string[];
  featured?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
  inStock: boolean;
};

// Mock product data
const products: Product[] = [
  // WOMEN'S PRODUCTS
  {
    id: "w1",
    name: "Summer Floral Dress",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&view=back",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&view=detail",
    ],
    category: "women",
    subcategory: "dresses",
    description: "A lightweight summer dress with beautiful floral pattern, perfect for warm days and casual outings.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink", "Blue"],
    rating: 4.5,
    reviewCount: 24,
    tags: ["summer", "casual", "floral"],
    featured: true,
    newArrival: true,
    bestSeller: true,
    inStock: true,
  },
  {
    id: "w2",
    name: "Boho Maxi Skirt",
    price: 899,
    originalPrice: 1399,
    discount: 36,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "women",
    subcategory: "skirts",
    description: "Flowy bohemian maxi skirt with colorful pattern for a free-spirited look.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Multicolor"],
    rating: 4.7,
    reviewCount: 14,
    tags: ["boho", "skirts", "summer"],
    featured: true,
    inStock: true,
  },
  {
    id: "w3",
    name: "Classic Blazer",
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    image: "https://images.unsplash.com/photo-1600574691453-499962cc0611?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "women",
    subcategory: "outerwear",
    description: "A timeless blazer that adds sophistication to any outfit. Perfect for office or formal occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Beige"],
    rating: 4.8,
    reviewCount: 32,
    tags: ["formal", "office", "classic"],
    bestSeller: true,
    inStock: true,
  },
  {
    id: "w4",
    name: "Silk Blouse",
    price: 1699,
    originalPrice: 2199,
    discount: 23,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "women",
    subcategory: "tops",
    description: "Elegant silk blouse with a flattering cut. Versatile piece for work or evening wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Red"],
    rating: 4.6,
    reviewCount: 28,
    tags: ["silk", "elegant", "formal"],
    inStock: true,
  },
  {
    id: "w5",
    name: "High-Waisted Jeans",
    price: 1299,
    originalPrice: 1799,
    discount: 28,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "women",
    subcategory: "pants",
    description: "Classic high-waisted jeans with a flattering fit. Comfortable and versatile for everyday wear.",
    sizes: ["24", "26", "28", "30", "32"],
    colors: ["Blue", "Black", "Light Blue"],
    rating: 4.4,
    reviewCount: 42,
    tags: ["jeans", "denim", "casual"],
    bestSeller: true,
    inStock: true,
  },
  {
    id: "w6",
    name: "Linen Wide-Leg Pants",
    price: 1199,
    originalPrice: 1599,
    discount: 25,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "women",
    subcategory: "pants",
    description: "Breathable linen wide-leg pants, perfect for hot summer days or beach vacations.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "White", "Navy"],
    rating: 4.3,
    reviewCount: 19,
    tags: ["linen", "summer", "comfortable"],
    newArrival: true,
    inStock: true,
  },
  {
    id: "w7",
    name: "Embroidered Cotton Top",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "women",
    subcategory: "tops",
    description: "Beautiful embroidered cotton top with boho-inspired detailing. Perfect for summer days.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Blue", "Pink"],
    rating: 4.5,
    reviewCount: 23,
    tags: ["cotton", "embroidered", "summer"],
    newArrival: true,
    inStock: true,
  },
  {
    id: "w8",
    name: "Wrap Midi Dress",
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "women",
    subcategory: "dresses",
    description: "Elegant wrap midi dress, flattering on all body types. Perfect for both casual and formal events.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Green", "Black", "Red"],
    rating: 4.7,
    reviewCount: 34,
    tags: ["elegant", "versatile", "midi"],
    featured: true,
    inStock: true,
  },
  {
    id: "w9",
    name: "Knit Cardigan",
    price: 1299,
    originalPrice: 1799,
    discount: 28,
    image: "https://images.unsplash.com/photo-1583744946564-b52d01a7b591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "women",
    subcategory: "outerwear",
    description: "Cozy knit cardigan perfect for layering during cooler seasons.",
    sizes: ["S", "M", "L"],
    colors: ["Beige", "Grey", "Black"],
    rating: 4.6,
    reviewCount: 27,
    tags: ["knitwear", "cozy", "casual"],
    inStock: true,
  },
  {
    id: "w10",
    name: "Pleated Tennis Skirt",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    image: "https://images.unsplash.com/photo-1592301933927-35b597393c0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "women",
    subcategory: "skirts",
    description: "Classic pleated tennis skirt, versatile for both athletic and casual wear.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Black", "Navy"],
    rating: 4.4,
    reviewCount: 18,
    tags: ["pleated", "sporty", "casual"],
    newArrival: true,
    inStock: true,
  },

  // MEN'S PRODUCTS
  {
    id: "m1",
    name: "Classic Denim Jacket",
    price: 1799,
    originalPrice: 2499,
    discount: 28,
    image: "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&view=back",
    ],
    category: "men",
    subcategory: "jackets",
    description: "A timeless denim jacket that never goes out of style. Perfect for layering in all seasons.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
    rating: 4.8,
    reviewCount: 36,
    tags: ["denim", "casual", "essentials"],
    featured: true,
    bestSeller: true,
    inStock: true,
  },
  {
    id: "m2",
    name: "Slim Fit Chinos",
    price: 899,
    originalPrice: 1299,
    discount: 30,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "men",
    subcategory: "pants",
    description: "Classic slim fit chinos, perfect for business casual or weekend wear.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Olive"],
    rating: 4.4,
    reviewCount: 26,
    tags: ["pants", "formal", "casual"],
    inStock: true,
  },
  {
    id: "m3",
    name: "Running Sneakers",
    price: 2499,
    originalPrice: 2999,
    discount: 17,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&view=side",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&view=top",
    ],
    category: "men",
    subcategory: "shoes",
    description: "Lightweight running sneakers with enhanced cushioning and breathable mesh upper.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Red", "Black", "White"],
    rating: 4.9,
    reviewCount: 42,
    tags: ["shoes", "sports", "running"],
    featured: true,
    bestSeller: true,
    inStock: true,
  },
  {
    id: "m4",
    name: "Oxford Button-Down Shirt",
    price: 1199,
    originalPrice: 1599,
    discount: 25,
    image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "men",
    subcategory: "shirts",
    description: "Classic Oxford button-down shirt, versatile for both casual and formal settings.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Pink"],
    rating: 4.7,
    reviewCount: 29,
    tags: ["oxford", "formal", "business"],
    bestSeller: true,
    inStock: true,
  },
  {
    id: "m5",
    name: "Graphic Print T-shirt",
    price: 599,
    originalPrice: 799,
    discount: 25,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "men",
    subcategory: "tshirts",
    description: "Casual graphic print t-shirt with unique design. Made from 100% cotton for comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Grey"],
    rating: 4.3,
    reviewCount: 18,
    tags: ["casual", "graphics", "streetwear"],
    newArrival: true,
    inStock: true,
  },
  {
    id: "m6",
    name: "Wool Blend Blazer",
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "men",
    subcategory: "suits",
    description: "Distinguished wool blend blazer, perfect for formal occasions or professional settings.",
    sizes: ["38", "40", "42", "44", "46"],
    colors: ["Navy", "Charcoal", "Black"],
    rating: 4.8,
    reviewCount: 24,
    tags: ["formal", "blazer", "professional"],
    featured: true,
    inStock: true,
  },
  {
    id: "m7",
    name: "Quilted Bomber Jacket",
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "men",
    subcategory: "jackets",
    description: "Trendy quilted bomber jacket with insulated padding. Perfect for transitional weather.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Olive", "Navy"],
    rating: 4.5,
    reviewCount: 31,
    tags: ["bomber", "casual", "outerwear"],
    newArrival: true,
    inStock: true,
  },
  {
    id: "m8",
    name: "Slim Fit Jeans",
    price: 1299,
    originalPrice: 1799,
    discount: 28,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "men",
    subcategory: "pants",
    description: "Classic slim fit jeans with slight stretch for comfort. Versatile for any casual outfit.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Blue", "Black", "Grey"],
    rating: 4.6,
    reviewCount: 37,
    tags: ["jeans", "denim", "casual"],
    bestSeller: true,
    inStock: true,
  },
  {
    id: "m9",
    name: "Henley Long Sleeve Shirt",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "men",
    subcategory: "shirts",
    description: "Comfortable henley long sleeve shirt with button placket. Perfect for layering or wearing alone.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Grey", "Navy", "Burgundy"],
    rating: 4.4,
    reviewCount: 22,
    tags: ["henley", "casual", "layering"],
    inStock: true,
  },
  {
    id: "m10",
    name: "Striped Polo Shirt",
    price: 799,
    originalPrice: 999,
    discount: 20,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "men",
    subcategory: "tshirts",
    description: "Classic striped polo shirt made from premium cotton piqué. Versatile for casual and smart-casual looks.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy/White", "Black/Grey", "Green/Navy"],
    rating: 4.5,
    reviewCount: 28,
    tags: ["polo", "stripes", "classic"],
    inStock: true,
  },

  // KIDS' PRODUCTS
  {
    id: "k1",
    name: "Kids' Dinosaur T-Shirt",
    price: 399,
    originalPrice: 599,
    discount: 33,
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "kids",
    subcategory: "boys",
    description: "A fun dinosaur print t-shirt for kids who love adventure and prehistoric creatures.",
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    colors: ["Green", "Blue"],
    rating: 4.7,
    reviewCount: 12,
    tags: ["kids", "casual", "dinosaur"],
    newArrival: true,
    inStock: true,
  },
  {
    id: "k2",
    name: "Girls' Floral Dress",
    price: 699,
    originalPrice: 999,
    discount: 30,
    image: "https://images.unsplash.com/photo-1524920591571-e40a3d372f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "kids",
    subcategory: "girls",
    description: "Adorable floral dress for little girls. Perfect for parties and special occasions.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Pink", "Yellow"],
    rating: 4.8,
    reviewCount: 15,
    tags: ["girls", "dress", "floral"],
    featured: true,
    inStock: true,
  },
  {
    id: "k3",
    name: "Kids' Denim Overalls",
    price: 799,
    originalPrice: 1099,
    discount: 27,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "kids",
    subcategory: "boys",
    description: "Classic denim overalls for kids. Durable and comfortable for everyday adventures.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Blue", "Light Blue"],
    rating: 4.6,
    reviewCount: 23,
    tags: ["denim", "overalls", "casual"],
    bestSeller: true,
    inStock: true,
  },
  {
    id: "k4",
    name: "Kids' Raincoat",
    price: 599,
    originalPrice: 899,
    discount: 33,
    image: "https://images.unsplash.com/photo-1581923627606-867abcc9dc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "kids",
    subcategory: "outerwear",
    description: "Colorful waterproof raincoat for kids. Keeps them dry during rainy day adventures.",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    colors: ["Yellow", "Blue", "Red"],
    rating: 4.5,
    reviewCount: 19,
    tags: ["raincoat", "waterproof", "outdoor"],
    inStock: true,
  },
  {
    id: "k5",
    name: "Baby Romper Set",
    price: 499,
    originalPrice: 699,
    discount: 29,
    image: "https://images.unsplash.com/photo-1519748771451-a94c596fad67?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "kids",
    subcategory: "infants",
    description: "Soft and comfortable romper set for babies. Includes matching hat and booties.",
    sizes: ["0-3M", "3-6M", "6-9M", "9-12M"],
    colors: ["White", "Pink", "Blue"],
    rating: 4.9,
    reviewCount: 24,
    tags: ["baby", "romper", "newborn"],
    featured: true,
    inStock: true,
  },
  {
    id: "k6",
    name: "Kids' Superhero Pajamas",
    price: 499,
    originalPrice: 699,
    discount: 29,
    image: "https://images.unsplash.com/photo-1560506840-ec148e82a604?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "kids",
    subcategory: "boys",
    description: "Cozy superhero-themed pajamas for kids. Perfect for bedtime adventures.",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    colors: ["Blue", "Red"],
    rating: 4.7,
    reviewCount: 32,
    tags: ["pajamas", "superhero", "nightwear"],
    bestSeller: true,
    inStock: true,
  },
  {
    id: "k7",
    name: "Girls' Tutu Skirt",
    price: 399,
    originalPrice: 599,
    discount: 33,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "kids",
    subcategory: "girls",
    description: "Fluffy tutu skirt for little dancers and dreamers. Perfect for parties and playtime.",
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    colors: ["Pink", "Purple", "White"],
    rating: 4.8,
    reviewCount: 18,
    tags: ["tutu", "ballet", "party"],
    newArrival: true,
    inStock: true,
  },
  {
    id: "k8",
    name: "Kids' Winter Jacket",
    price: 899,
    originalPrice: 1299,
    discount: 31,
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "kids",
    subcategory: "outerwear",
    description: "Warm padded winter jacket for kids. Water-resistant and cozy for cold weather.",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    colors: ["Navy", "Red", "Purple"],
    rating: 4.6,
    reviewCount: 27,
    tags: ["winter", "jacket", "warm"],
    inStock: true,
  },

  // ACCESSORIES
  {
    id: "a1",
    name: "Leather Crossbody Bag",
    price: 999,
    originalPrice: 1499,
    discount: 33,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&view=inside",
    ],
    category: "accessories",
    subcategory: "bags",
    description: "A stylish leather crossbody bag with multiple compartments for organized storage.",
    colors: ["Tan", "Black", "Brown"],
    rating: 4.6,
    reviewCount: 18,
    tags: ["leather", "bags", "accessories"],
    featured: true,
    inStock: true,
  },
  {
    id: "a2",
    name: "Oversized Sunglasses",
    price: 599,
    originalPrice: 799,
    discount: 25,
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "accessories",
    subcategory: "eyewear",
    description: "Stylish oversized sunglasses with UV protection for fashionable sun protection.",
    colors: ["Black", "Tortoise"],
    rating: 4.3,
    reviewCount: 8,
    tags: ["sunglasses", "summer", "accessories"],
    newArrival: true,
    inStock: true,
  },
  {
    id: "a3",
    name: "Statement Necklace",
    price: 799,
    originalPrice: 999,
    discount: 20,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "accessories",
    subcategory: "jewelry",
    description: "Eye-catching statement necklace perfect for adding glamour to any outfit.",
    colors: ["Gold", "Silver"],
    rating: 4.7,
    reviewCount: 14,
    tags: ["jewelry", "statement", "necklace"],
    featured: true,
    inStock: true,
  },
  {
    id: "a4",
    name: "Wide Brim Fedora Hat",
    price: 699,
    originalPrice: 899,
    discount: 22,
    image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "accessories",
    subcategory: "hats",
    description: "Classic wide-brim fedora hat, perfect for adding style to any outfit while providing sun protection.",
    colors: ["Tan", "Black", "Brown"],
    rating: 4.5,
    reviewCount: 22,
    tags: ["hat", "fedora", "sun protection"],
    bestSeller: true,
    inStock: true,
  },
  {
    id: "a5",
    name: "Leather Watch",
    price: 1999,
    originalPrice: 2499,
    discount: 20,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "accessories",
    subcategory: "watches",
    description: "Elegant leather watch with minimalist design. Perfect for both casual and formal occasions.",
    colors: ["Brown", "Black", "Navy"],
    rating: 4.8,
    reviewCount: 36,
    tags: ["watch", "leather", "timepiece"],
    featured: true,
    inStock: true,
  },
  {
    id: "a6",
    name: "Woven Tote Bag",
    price: 799,
    originalPrice: 999,
    discount: 20,
    image: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "accessories",
    subcategory: "bags",
    description: "Spacious woven tote bag, perfect for beach days or casual outings.",
    colors: ["Natural", "Black", "Blue"],
    rating: 4.4,
    reviewCount: 26,
    tags: ["tote", "beach", "summer"],
    newArrival: true,
    inStock: true,
  },
  {
    id: "a7",
    name: "Silk Scarf",
    price: 599,
    originalPrice: 799,
    discount: 25,
    image: "https://images.unsplash.com/photo-1584704876858-55b8a7540e78?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "accessories",
    subcategory: "scarves",
    description: "Luxurious silk scarf with vibrant print. Versatile accessory for adding a touch of elegance.",
    colors: ["Multicolor", "Blue", "Red"],
    rating: 4.6,
    reviewCount: 19,
    tags: ["silk", "scarf", "elegant"],
    inStock: true,
  },
  {
    id: "a8",
    name: "Canvas Backpack",
    price: 1299,
    originalPrice: 1699,
    discount: 23,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "accessories",
    subcategory: "bags",
    description: "Durable canvas backpack with multiple pockets. Perfect for everyday use or short trips.",
    colors: ["Olive", "Black", "Navy"],
    rating: 4.7,
    reviewCount: 31,
    tags: ["backpack", "canvas", "travel"],
    bestSeller: true,
    inStock: true,
  },
];

// Simulated API functions with delays to mimic real API calls

// Get all products with optional filtering
export const getProducts = async (
  category?: string,
  subcategory?: string,
  sortBy?: string,
  limit?: number,
  filters?: any
): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  
  let filteredProducts = [...products];
  
  // Basic category filtering
  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category.toLowerCase());
  }
  
  // Subcategory filtering
  if (subcategory) {
    filteredProducts = filteredProducts.filter(p => p.subcategory === subcategory.toLowerCase());
  }

  // Apply advanced filters if provided
  if (filters) {
    // Filter by subcategories array
    if (filters.subcategories && filters.subcategories.length > 0) {
      filteredProducts = filteredProducts.filter(p => 
        p.subcategory && filters.subcategories.includes(p.subcategory)
      );
    }
    
    // Filter by price range
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      const minPrice = filters.minPrice !== undefined ? filters.minPrice : 0;
      const maxPrice = filters.maxPrice !== undefined ? filters.maxPrice : 100000;
      filteredProducts = filteredProducts.filter(p => p.price >= minPrice && p.price <= maxPrice);
    }
    
    // Filter by sizes
    if (filters.sizes && filters.sizes.length > 0) {
      filteredProducts = filteredProducts.filter(p => 
        p.sizes && p.sizes.some(size => filters.sizes.includes(size))
      );
    }
    
    // Filter by colors
    if (filters.colors && filters.colors.length > 0) {
      filteredProducts = filteredProducts.filter(p => 
        p.colors && p.colors.some(color => filters.colors.includes(color))
      );
    }
  }
  
  // Apply sorting
  if (sortBy) {
    switch (sortBy) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filteredProducts.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
        break;
      case 'popular':
        filteredProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
    }
  }
  
  if (limit && limit > 0) {
    filteredProducts = filteredProducts.slice(0, limit);
  }
  
  return filteredProducts;
};

// Get a single product by ID
export const getProduct = async (id: string): Promise<Product | null> => {
  await new Promise(resolve => setTimeout(resolve, 300)); // Simulate network delay
  return products.find(p => p.id === id) || null;
};

// Get featured products by type: "New Arrivals", "Best Sellers", or custom title
export const getFeaturedProducts = async (type: string, limit = 4): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 400)); // Simulate network delay
  
  let result: Product[] = [];
  
  switch (type.toLowerCase()) {
    case 'new arrivals':
      result = products.filter(p => p.newArrival);
      break;
    case 'best sellers':
      result = products.filter(p => p.bestSeller);
      break;
    case 'featured':
    default:
      result = products.filter(p => p.featured);
  }
  
  return result.slice(0, limit);
};

// Search products by query
export const searchProducts = async (query: string): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 600)); // Simulate network delay
  
  const searchTerms = query.toLowerCase().trim().split(/\s+/);
  
  return products.filter(product => {
    const searchableText = [
      product.name,
      product.category,
      product.subcategory,
      product.description,
      ...(product.tags || [])
    ].join(' ').toLowerCase();
    
    return searchTerms.some(term => searchableText.includes(term));
  });
};
