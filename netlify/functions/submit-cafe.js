const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request body." }) };
  }

  const name = (data.name || "").trim();
  const address = (data.address || "").trim();
  const website = (data.website || "").trim();
  const description = (data.description || "").trim();
  const submitter = (data.submitter || "").trim();
  const score = parseFloat(data.score);

  if (!name || !address || !description || isNaN(score) || score < 0 || score > 5) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing or invalid fields." }) };
  }

  // Geocode the address with OpenStreetMap's free Nominatim service (no API key needed)
  let lat = null;
  let lng = null;
  try {
    const geoRes = await fetch(
      "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" +
        encodeURIComponent(name + ", " + address),
      { headers: { "User-Agent": "NeilDrinksMatcha-CommunitySubmission/1.0" } }
    );
    const geoData = await geoRes.json();
    if (geoData && geoData[0]) {
      lat = parseFloat(geoData[0].lat);
      lng = parseFloat(geoData[0].lon);
    }
  } catch (geoErr) {
    // If geocoding fails, we still save the submission — it just won't have a pin yet.
  }

  const store = getStore({ name: "community-cafes", consistency: "strong" });
  const id = Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);

  const entry = {
    id,
    name,
    address,
    website,
    score,
    description,
    submitter,
    lat,
    lng,
    submittedAt: new Date().toISOString()
  };

  await store.setJSON(id, entry);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ok: true, entry })
  };
};
