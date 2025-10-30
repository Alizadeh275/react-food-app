import MealItem from "./MealItem";
import { useMeals } from "../../hooks/useMeals";

export default function MealList() {
  const { meals, loading, error } = useMeals();

  if (loading) {
    return <p className="center">درحال بارگذاری...</p>;
  }

  if (error) {
    return (
      <div className="error center">
        <h2>خطا</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
