const { getStore } = require("@netlify/blobs");

exports.handler = async () => {
  try {
    const store = getStore({ name: "community-cafes", consistency: "strong" });
    const { blobs } = await store.list();

    const entries = await Promise.all(
      blobs.map(function (b) {
        return store.get(b.key, { type: "json" });
      })
    );

    entries.sort(function (a, b) {
      return new Date(b.submittedAt) - new Date(a.submittedAt);
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
      body: JSON.stringify(entries)
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Could not load community cafés." })
    };
  }
};
