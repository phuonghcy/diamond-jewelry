import { Link } from 'react-router-dom';
import styles from './Product.module.css';

export default function Product(props) {
    // format price
    let formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.price);

    return (
            <div className={styles.product_card}>
                <img className={styles.product_image} src={ props.image } alt={ props.name } />
                <p className={styles.product_name}>{ props.name }</p>
                <p className={styles.product_price}>{ formattedPrice }</p>
            </div>
    );
}