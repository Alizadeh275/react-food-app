import { API_BASE_URL } from "../config/env";

export async function fetchMeals() {
    const response = await fetch(`${API_BASE_URL}/meals`);
    if (!response.ok) {
        throw new Error("Failed to fetch meals.");
    }
    return response.json();
}
