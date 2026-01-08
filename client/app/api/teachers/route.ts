import { NextResponse } from 'next/server';

export async function GET() {
    // TODO: Implement get teachers logic
    return NextResponse.json({ teachers: [] });
}

export async function POST(request: Request) {
    // TODO: Implement create teacher logic
    const body = await request.json();
    return NextResponse.json({ message: 'Teacher created', data: body });
}
