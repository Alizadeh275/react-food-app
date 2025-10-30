const BASE_URL = "http://localhost:3000";

export async function fetchMeals() {
    const response = await fetch(`${BASE_URL}/meals`);
    if (!response.ok) {
        throw new Error("Failed to fetch meals.");
    }
    return response.json();
}
