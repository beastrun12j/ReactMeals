import mealsImage from '../../assets/meals.jpeg'
import HeaderCartButton from '../UI/HeaderCartButton';
import styles from './Header.module.css'

const Header = (props) => {
    return (
    <>
        <header className={styles.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
        </header>
        <div className={styles['main-image']}>
            <img src={mealsImage} alt='A table full of delicious food!'/>
        </div>
    </>
    )
}

export default Header;