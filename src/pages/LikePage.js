import React from 'react'
import styles from './LikePage.module.css'
import  { useState, useEffect, useCallback } from 'react'
import LikeItem from '../components/LikeItem'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LikePage() {
    const LikeData = {
        items: [
          {
            id: 1,
            image: "https://picsum.photos/175/120",
            name: "Đồng hồ Bạc 1",
            price: 765000,
            added_day: '20/04/2022',
            avail: true
          },
    
          {
            id: 2,
            image:"https://picsum.photos/175/120",
            name: "Đồng hồ Bạc 2",
            price: 765000,
            added_day: '19/04/2022',
            avail: false
          },
    
          {
            id: 3,
            image: "https://picsum.photos/175/120",
            name: "Đồng hồ Bạc 3",
            price: 765000,
            added_day: '18/04/2022',
            avail: true
          },

          {
            id: 4,
            image: "https://picsum.photos/175/120",
            name: "Đồng hồ Bạc 4",
            price: 765000,
            added_day: '18/04/2022',
            avail: true
          },

          {
            id: 5,
            image: "https://picsum.photos/175/120",
            name: "Đồng hồ Bạc 5",
            price: 765000,
            added_day: '18/04/2022',
            avail: true
          }
        ]
      }

      const [likeList, setLikeList] = useState(LikeData);

      const [likeItem, setLikeItem] = useState('');

    const onDeleteButtonClick = () => {
      alert('Đây là nút xóa toàn bộ')
    }

    const onAddButtonClick =() => {
      alert("Đây là nút thêm vào giỏ hàng")
    }
       

  return (
    <>
      <div className={styles.container}>
          <Header />
        <div className={styles.like_header}>
          <ul>
            <li>Trang chủ</li>
            <li>Danh sách yêu thích</li>
          </ul>
          <h1>Danh sách yêu thích</h1>
        </div>

        <div className={styles.like_body}>
          <table className={styles.like_detail} cellPadding="5" cellSpacing="0" >
            <thead>
              <tr>
                <th></th>
                <th>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Ngày thêm</th>
                <th>Tình trạng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {
               likeList.items.map(item =>
               <LikeItem key={item.id} id={item.id} image={item.image} name={item.name} price={item.price}
                    avail={item.avail} added_day={item.added_day} />
              )
            }
            </tbody>
              
          </table>
          <div className={styles.div_btn}>
            <button id='delete-button' className={styles.delete_button} onClick={onDeleteButtonClick}>Bỏ tất cả sản phẩm khỏi Danh sách yêu thích</button>
            <button id='add-button' className={styles.add_button} onClick={onAddButtonClick}>Thêm tất cả sản phẩm vào Giỏ hàng</button>
          </div>
          
        </div>
        <Footer />
      </div>
    </>
  )
}