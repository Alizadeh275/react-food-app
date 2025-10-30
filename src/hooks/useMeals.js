import { useEffect, useState } from "react";

export function useMeals() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadMeals() {
            try {
                const response = await fetch("http://localhost:3000/meals");
                if (!response.ok) {
                    throw new Error("Failed to fetch meals.");
                }
                const data = await response.json();
                setMeals(data);
            } catch (err) {
                setError(err.message || "Something went wrong!");
            } finally {
                setLoading(false);
            }
        }

        loadMeals();
    }, []);

    return { meals, loading, error };
}
