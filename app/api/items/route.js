import { NextResponse } from 'next/server';
import { readItems, writeItems } from '@/lib/data';

// GET all items
export async function GET() {
  try {
    const items = readItems();
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch items' },
      { status: 500 }
    );
  }
}

// POST create new item
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, description, price, image, category, stock } = body;

    // Validation
    if (!name || !description || price === undefined) {
      return NextResponse.json(
        { error: 'Name, description, and price are required' },
        { status: 400 }
      );
    }

    const items = readItems();
    
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

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error('Error creating item:', error);
    return NextResponse.json(
      { error: 'Failed to create item' },
      { status: 500 }
    );
  }
}
