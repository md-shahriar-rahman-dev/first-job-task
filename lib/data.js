import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'lib', 'data', 'items.json');

// Helper function to read items
export function readItems() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      // Initialize with default data if file doesn't exist
      const defaultData = [
        {
          id: 1,
          name: "Premium Wireless Headphones",
          description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
          price: 199.99,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
          category: "Electronics",
          stock: 50
        },
        {
          id: 2,
          name: "Smart Watch Pro",
          description: "Feature-rich smartwatch with health tracking, GPS, and water resistance. Stay connected and monitor your fitness goals.",
          price: 299.99,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
          category: "Electronics",
          stock: 30
        },
        {
          id: 3,
          name: "Designer Backpack",
          description: "Stylish and durable backpack with multiple compartments. Made from premium materials, perfect for travel and daily use.",
          price: 89.99,
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
          category: "Fashion",
          stock: 75
        },
        {
          id: 4,
          name: "Coffee Maker Deluxe",
          description: "Professional-grade coffee maker with programmable settings. Brew the perfect cup every morning with this premium appliance.",
          price: 149.99,
          image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500",
          category: "Home & Kitchen",
          stock: 40
        },
        {
          id: 5,
          name: "Yoga Mat Premium",
          description: "Eco-friendly yoga mat with superior grip and cushioning. Ideal for all types of yoga and fitness routines.",
          price: 49.99,
          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
          category: "Sports",
          stock: 100
        },
        {
          id: 6,
          name: "Wireless Charging Pad",
          description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.",
          price: 29.99,
          image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500",
          category: "Electronics",
          stock: 60
        }
      ];
      // Ensure directory exists
      const dataDir = path.dirname(DATA_FILE);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2));
      return defaultData;
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading items:', error);
    return [];
  }
}

// Helper function to write items
export function writeItems(items) {
  try {
    const dataDir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2));
  } catch (error) {
    console.error('Error writing items:', error);
    throw error;
  }
}
