import { NextResponse } from 'next/server';
import { readItems } from '@/lib/data';

// GET single item by ID
export async function GET(request, { params }) {
  try {
    const items = readItems();
    const item = items.find(i => i.id === parseInt(params.id));
    
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
