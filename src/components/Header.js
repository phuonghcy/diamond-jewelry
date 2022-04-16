import { Link } from 'react-router-dom';
import Navbar from './Navbar.js';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div>
            <div className={styles.wrapper}>
                <ul className={styles.left}>
                    <li>
                        <ion-icon name="call-outline"></ion-icon>
                        <span>567 288 3345</span>
                    </li>
                    <li>
                        <ion-icon name="mail-outline"></ion-icon>
                        <span>info@diamondcompany.com</span>
                    </li>
                </ul>
                <ul className={styles.right}>
                    <li>
                        <ion-icon name="log-in-outline"></ion-icon>
                        <Link to="/login">Đăng nhập</Link>
                    </li>
                    <li>
                        <ion-icon name="person-outline"></ion-icon>
                        <Link to="/account">Tài khoản</Link>
                    </li>
                </ul>
            </div>
            <Navbar />
        </div>

    );
}