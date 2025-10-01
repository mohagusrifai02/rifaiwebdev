import { connectDB } from "../../../../../lib/mongodb";
import { User } from "../../../../../models/User";
import bcrypt from "bcrypt";
import { signToken } from "../../../../../lib/auth";

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return Response.json({ error: "Email tidak ditemukan" }, { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return Response.json({ error: "Password salah" }, { status: 401 });
  }

  const token = signToken({id:user._id.toString(), email:user.email});

  return Response.json({ 
    message: "Login berhasil",
    token,
    user:{
        id:user._id,
        email:user.email
    },
});
}