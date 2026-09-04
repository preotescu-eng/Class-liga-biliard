import { getStore } from "@netlify/blobs";

export default async (req) => {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const expected = process.env.PUBLISH_KEY;
  const provided = req.headers.get("x-admin-key");

  if (!expected) {
    return Response.json({ error: "PUBLISH_KEY nu este configurată în Netlify." }, { status: 500 });
  }
  if (!provided || provided !== expected) {
    return Response.json({ error: "Cheie de administrare incorectă." }, { status: 401 });
  }

  try {
    const data = await req.json();
    if (!data || !Array.isArray(data.players) || typeof data.matches !== "object" || !Array.isArray(data.ranking)) {
      return Response.json({ error: "Date invalide." }, { status: 400 });
    }

    const store = getStore({ name: "class-liga", consistency: "strong" });
    await store.setJSON("standings", data);

    return Response.json({ ok: true, publishedAt: data.publishedAt });
  } catch (error) {
    return Response.json({ error: "Eroare la publicare." }, { status: 500 });
  }
};

export const config = {
  path: "/api/publish"
};