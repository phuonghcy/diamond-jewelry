import React from 'react'
import './LikeItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faBagShopping} from '@fortawesome/free-solid-svg-icons'

export default function LikeItem(props) {
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.price);
  return (
    <>
        <tr className={props.wrapper}>
            <td>
                <button id='remove-button'>
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
                <button id='pay-button'>
                <FontAwesomeIcon icon={faBagShopping} />
                </button>
            </td>
        </tr>
    </>
  )
}
