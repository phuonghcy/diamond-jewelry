import React, { useState } from 'react'
import './LikeItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faBagShopping} from '@fortawesome/free-solid-svg-icons'

export default function LikeItem(props) {

    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.price);


    const onRemoveButtonClick = () => {
        console.log(props.name);
        alert('nút xóa sản phẩm: ' + props.name)
    }

    const onPayButtonClick = () => {
        alert('nút thêm vào giỏ hàng: '+ props.name)
    }
    
  return (
    <>
        <tr className={props.wrapper}>
            <td>
                <button id='remove-button' onClick={onRemoveButtonClick} >
               <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
            <td>
                <img src={props.image} alt={props.name} />
            </td>
            <td>{props.name}</td>
            <td className='price'>{formattedPrice}</td>
            <td > {props.added_day}</td>
            <td >{props.avail}</td>
            <td>
                <button id='pay-button' onClick={onPayButtonClick}>
                <FontAwesomeIcon icon={faBagShopping} />
                </button>
            </td>
        </tr>
    </>
  )
}