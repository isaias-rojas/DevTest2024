const BASE_URL = process.env.PUBLIC_API || "http://localhost:8000/api/v1";



export async function getPolls() {
  try {
    const response = await fetch(`${BASE_URL}/polls`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json;
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
