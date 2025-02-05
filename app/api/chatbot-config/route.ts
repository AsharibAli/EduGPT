import { NextResponse } from 'next/server';

export async function GET() {
  // Fetch the sensitive environment variables server-side
  const chatflowId = process.env.CHATFLOW_ID;
  const apiHost = process.env.API_HOST;

  return NextResponse.json({ chatflowId, apiHost });
}
