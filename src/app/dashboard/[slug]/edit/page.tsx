"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditPostPage() {
  const router = useRouter();
  const { slug } = useParams() as { slug: string }; // slug dari URL

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  // ambil data lama buat prefill
  useEffect(() => {
    fetch(`/api/posts/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setTitle(data.data.title);
          setBody(data.data.body);
          setAuthor(data.data.author || "");
        }
      })
      .finally(() => setLoading(false));
  }, [slug]);

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch(`/api/posts/${slug}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body, author }),
    });

    const data = await res.json();

    if (data.ok) {
      alert("Post berhasil diupdate!");
      router.push("/dashboard"); // balik ke daftar
    } else {
      alert("Error update: " + data.error);
    }
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container-edit">
      <h1>Edit Post</h1>
      <form onSubmit={handleUpdate}>
        <ul>
          <li>
            <input
              type="text"
              placeholder="Judul"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </li>
          <li>
            <textarea
              placeholder="Isi artikel"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </li>
          <li>
            <button type="submit">Update Post</button>
          </li>
        </ul>
      </form>
    </div>
  );
}
