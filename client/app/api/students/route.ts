import { NextResponse } from 'next/server';

export async function GET() {
    // TODO: Implement get students logic
    return NextResponse.json({ students: [] });
}

export async function POST(request: Request) {
    // TODO: Implement create student logic
    const body = await request.json();
    return NextResponse.json({ message: 'Student created', data: body });
}
