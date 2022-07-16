export async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Network error: ${res.status}: ${res.statusText}`);
  }
  return await res.json();
}
