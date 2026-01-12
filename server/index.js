const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Data file path
const DATA_FILE = path.join(__dirname, 'data', 'items.json');

// Ensure data directory exists
const dataDir = path.dirname(DATA_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize items.json with sample data if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  const initialData = [
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
  fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
}

// Helper function to read items
function readItems() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper function to write items
function writeItems(items) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2));
}

// GET all items
app.get('/api/items', (req, res) => {
  try {
    const items = readItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// GET single item by ID
app.get('/api/items/:id', (req, res) => {
  try {
    const items = readItems();
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch item' });
  }
});

// POST create new item
app.post('/api/items', (req, res) => {
  try {
    const items = readItems();
    const { name, description, price, image, category, stock } = req.body;

    // Validation
    if (!name || !description || !price) {
      return res.status(400).json({ error: 'Name, description, and price are required' });
    }

    // Generate new ID
    const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;

    const newItem = {
      id: newId,
      name,
      description,
      price: parseFloat(price),
      image: image || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500",
      category: category || "General",
      stock: stock ? parseInt(stock) : 0
    };

    items.push(newItem);
    writeItems(items);

    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create item' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

