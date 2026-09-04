import { getStore } from "@netlify/blobs";

export default async () => {
  try {
    const store = getStore({ name: "class-liga", consistency: "strong" });
    const data = await store.get("standings", { type: "json", consistency: "strong" });

    if (!data) {
      return Response.json({ error: "Clasamentul nu a fost publicat încă." }, {
        status: 404,
        headers: { "Cache-Control": "no-store" }
      });
    }

    return Response.json(data, {
      headers: { "Cache-Control": "no-store" }
    });
  } catch (error) {
    return Response.json({ error: "Eroare la încărcarea clasamentului." }, { status: 500 });
  }
};

export const config = {
  path: "/api/standings"
};