import styles from './CartPage.module.css';

export default function CartPage() {
    return (
        <div className={ styles.container }>
            <div className={ styles.cart_header }>
                <ul>
                    <li>Trang chủ</li>
                    <li>Giỏ hàng</li>
                </ul>
                <h1>GIỎ HÀNG</h1>
            </div>
            <div className={ styles.cart_body }>
                <table className={ styles.cart_detail } cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ẢNH</th>
                            <th style={{textAlign: 'left'}}>TÊN SẢN PHẨM</th>
                            <th>GIÁ BÁN</th>
                            <th>SỐ LƯỢNG</th>
                            <th>TỔNG TIỀN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button className={ styles.remove_button }>
                                    <ion-icon name="trash-outline"></ion-icon>
                                </button>
                            </td>
                            <td>
                                <img src="https://picsum.photos/175/120" alt="product" />
                            </td>
                            <td>Đồng hồ Bạc STYLE By PNJ DNA 0000Y000133</td>
                            <td>765.000 đ</td>
                            <td>
                                <div className={ styles.quantity_wrapper }>
                                    <button className={ styles.decrease_button }>-</button>
                                    <input type="number" />
                                    <button className={ styles.increase_button }>+</button>
                                </div>
                            </td>
                            <td>765.000 đ</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
}

// summary