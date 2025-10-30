import { useCart } from "../../context/CartContext";
import { convertToPersianDigits } from "../../utils/convertToPersianDigits";

export default function MealItem({ meal }) {
  const { addItem } = useCart();
  // Ensure price is numeric
  const price = Number(meal.price * 100);
  const perisanPrice = convertToPersianDigits(price.toFixed(2));

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div className="meal-item-description">
          <h3>{meal.name}</h3>
          <span className="meal-item-price">{perisanPrice} هزارتومان</span>
          <p>{meal.description}</p>
        </div>
        <div className="meal-item-actions">
          <button className="button" onClick={() => addItem(meal)}>
            افزودن به سبد خرید
          </button>
        </div>
      </article>
    </li>
  );
}
