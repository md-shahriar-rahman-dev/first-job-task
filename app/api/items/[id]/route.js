import { NextResponse } from 'next/server';
import { readItems } from '@/lib/data';

// GET single item by ID
export async function GET(request, { params }) {
  try {
    // Await params in Next.js 15/16 App Router
    const { id } = await params;
    const items = readItems();
    const itemId = parseInt(id);
    const item = items.find(i => i.id === itemId);
    
    if (!item) {
      return NextResponse.json(
        { error: 'Item not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(item);
  } catch (error) {
    console.error('Error fetching item:', error);
    return NextResponse.json(
      { error: 'Failed to fetch item' },
      { status: 500 }
    );
  }
}
