import { Link } from 'react-router-dom';
import './Navbar.css'

export default function NavBar() {
    return (
        <nav className="menu-container">
            <input type="checkbox" aria-label="Toggle menu" />
            <span></span>
            <span></span>
            <span></span>

            <Link to="/" className="menu-logo">
                <img src="https://wweb.dev/resources/navigation-generator/logo-placeholder.png" alt="My Awesome Website" />
            </Link>

            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">
                            Trang chủ
                        </Link>
                    </li>
                    <li>
                        <Link to="/trang-suc">
                            Trang sức
                        </Link>
                    </li>
                    <li>
                        <Link to="/dong-ho">
                            Đồng hồ
                        </Link>
                    </li>
                    <li>
                        <Link to="/qua-tang">
                            Quà tặng
                        </Link>
                    </li>
                    <li>
                        <Link to="/lien-he">
                            Liên hệ
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <form action="">
                            <input type="search" placeholder="Search here ..."></input>
                            <ion-icon class="md hydrated search-icon" name="search-outline"></ion-icon>
                        </form>
                    </li>
                    <li>
                        <Link to="/yeu-thich">
                            <ion-icon name="heart-outline"></ion-icon>
                        </Link>
                    </li>
                    <li>
                        <Link to="/gio-hang">
                            <ion-icon name="bag-handle-outline"></ion-icon>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}