import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false)
  const cartContext = useContext(CartContext);
  const numberOfCartItems = cartContext.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${isButtonHighlighted && styles.bump}`

  useEffect(() => {
    if(cartContext.items.length === 0) {
      return;
    }
    setIsButtonHighlighted(true)

    const timer = setTimeout(() => {
      setIsButtonHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [cartContext.items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
