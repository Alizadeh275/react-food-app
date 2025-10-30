import { useEffect, useState } from "react";
import { fetchMeals } from "../api/mealsApi";

export function useMeals() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadMeals() {
            try {
                const data = await fetchMeals();
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
