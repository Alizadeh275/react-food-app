export default function MealItem({ meal }) {
  // Ensure price is numeric
  const price = Number(meal.price);

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div className="meal-item-description">
          <h3>{meal.name}</h3>
          <span className="meal-item-price">{price.toFixed(2)} هزارتومان</span>
          <p>{meal.description}</p>
        </div>
        <div className="meal-item-actions">
          <button className="button">افزودن به سبد خرید</button>
        </div>
      </article>
    </li>
  );
}
