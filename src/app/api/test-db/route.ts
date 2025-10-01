import { connectDB } from "../../../../lib/mongodb";

export async function GET() {
  try {
    const conn = await connectDB();
    return Response.json({ status: 'connected', host: conn.connection.host });
  } catch (error) {
    return Response.json({ status: 'error', message: (error as Error).message }, { status: 500 });
  }
}