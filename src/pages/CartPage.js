import { useState } from 'react';
import styles from './CartPage.module.css';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CartPage() {
    const cartData = {
        items: [
            {
                id: 1,
                image: "https://picsum.photos/175/120",
                name: "Đồng hồ Bạc STYLE By PNJ DNA 0000Y000133",
                price: 765000,
                quantity: 1,
                total_cost: 765000
            },
            {
                id: 2,
                image: "https://picsum.photos/175/120",
                name: "Đồng hồ Bạc STYLE By PNJ DNA 0000Y000133",
                price: 765000,
                quantity: 1,
                total_cost: 765000
            },
            {
                id: 3,
                image: "https://picsum.photos/175/120",
                name: "Đồng hồ Bạc STYLE By PNJ DNA 0000Y000133",
                price: 765000,
                quantity: 1,
                total_cost: 765000
            },
            {
                id: 4,
                image: "https://picsum.photos/175/120",
                name: "Đồng hồ Bạc STYLE By PNJ DNA 0000Y000133",
                price: 765000,
                quantity: 1,
                total_cost: 765000
            },
        ],
        sub_total: 3060000,
        shipping_fee: 300000,
        grand_total: 3360000
    }
    
    const [ subTotal, setSubTotal ] = useState(cartData.sub_total);
    const [ shippingFee, setShippingFee ] = useState(cartData.shipping_fee);
    const [ grandTotal, setGrandTotal ] = useState(cartData.grand_total);

    // format currency
    const formattedSubTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subTotal);
    const formattedShippingFee = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(shippingFee);
    const formattedGrandTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(grandTotal);

    function updateCart(id, quantity) {
        const item = cartData.items.find(item => item.id === id);
        item.quantity = quantity;
        item.total_cost = quantity * item.price;
        cartData.sub_total = cartData.items.reduce((sum, item) => sum + item.total_cost, 0)
        setSubTotal(cartData.sub_total);
        setGrandTotal(cartData.sub_total + shippingFee);
    }

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.cart_header}>
                <ul>
                    <li>Trang chủ</li>
                    <li>Giỏ hàng</li>
                </ul>
                <h1>GIỎ HÀNG</h1>
            </div>
            <div className={styles.cart_body}>
                <table className={styles.cart_detail} cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ẢNH</th>
                            <th style={{ textAlign: 'left' }}>TÊN SẢN PHẨM</th>
                            <th>GIÁ BÁN</th>
                            <th>SỐ LƯỢNG</th>
                            <th>TỔNG TIỀN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartData.items.map(item =>
                                <CartItem key={item.id} id={item.id} image={item.image} name={item.name} price={item.price}
                                    quantity={item.quantity} total_cost={item.total_cost} updateCart={updateCart}></CartItem>
                            )
                        }
                    </tbody>
                </table>

                <table className={styles.summary} cellSpacing="20 50" cellPadding="0">
                    <thead>
                        <tr>
                            <th colSpan={2}>BẢNG TÓM TẮT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tạm tính</td>
                            <td>{formattedSubTotal}</td>
                        </tr>
                        <tr>
                            <td>Phí vận chuyển</td>
                            <td>{formattedShippingFee}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <hr />
                            </td>
                        </tr>
                        <tr>
                            <td>Thành tiền</td>
                            <td>{formattedGrandTotal}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <hr />
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.center} colSpan={2}>
                                <button>Xác nhận đặt hàng</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}