import { connectDB } from "../../../../../lib/mongodb";
import { User } from "../../../../../models/User";
import bcrypt from "bcrypt"

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  if (!email || !password) {
    return Response.json({ error: "Email dan password wajib diisi" }, { status: 400 });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return Response.json({ error: "Email sudah terdaftar" }, { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, password: hashedPassword });

  return Response.json({ message: "Registrasi berhasil", userId: newUser._id }, { status: 201 });
}