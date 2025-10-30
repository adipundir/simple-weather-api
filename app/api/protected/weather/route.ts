import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: "Premium data", 
    timestamp: Date.now() 
  });
}

