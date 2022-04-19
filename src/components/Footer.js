import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={ styles.footer }>
            <div className={ styles.top }>
                <div className={ styles.basic_info }>
                    <img src={ require("../assets/images/logoipsum-logo-52.png") } alt="logo" />
                    <p>© 2017 Công Ty Cổ Phần Vàng Bạc Đá Quý Phú Nhuận</p>
                    <p>170E Phan Đăng Lưu, P.3, Q.Phú Nhuận, TP.Hồ Chí Minh</p>
                </div>

                <div className={ styles.about }>
                    <h3>VỀ DIAMOND JEWELRY</h3>
                    <ul>
                        <li><Link to="/">TRANG CHỦ</Link></li>
                        <li><Link to="/trang-suc">TRANG SỨC</Link></li>
                        <li><Link to="/dong-ho">ĐỒNG HỒ</Link></li>
                        <li><Link to="/">BỘ SƯU TẬP MỚI</Link></li>
                        <li><Link to="/lien-he">LIÊN HỆ</Link></li>
                    </ul>
                </div>

                <div className={ styles.services }>
                    <h3>DỊCH VỤ KHÁCH HÀNG</h3>
                    <ul>
                        <li><Link to="/">Hướng dẫn đo size trang sức</Link></li>
                        <li><Link to="/">Hướng dẫn mua hàng</Link></li>
                        <li><Link to="/">Hướng dẫn giao hàng</Link></li>
                        <li><Link to="/">Chính sách bảo hành thu đổi</Link></li>
                        <li><Link to="/">Chính sách khách hàng thân thiết</Link></li>
                    </ul>
                </div>

                <div className={ styles.connect }>
                    <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
                    <p>Liên hệ với chúng tôi qua email hoặc qua số điện thoại dưới đây để được tư vấn tận tâm nhất</p>
                    <ul>
                        <li className={ styles.tel }>+1 800 123 1234</li>
                        <li className={ styles.email }>email@website.com</li>
                    </ul>
                </div>
            </div>
            <div className={ styles.bottom }>
                <p>@Copyright 2019. All Right Reserved</p>

                <ul>
                    <li>
                        <Link to="/chinh-sach-bao-mat">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/dieu-khoan-va-dieu-kien">Terms & Conditions</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}