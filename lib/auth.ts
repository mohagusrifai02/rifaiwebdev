import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "secret_key"; // simpan di .env untuk keamanan

export function signToken(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET) as { id: string; email: string };
  } catch (err) {
    return null;
  }
}