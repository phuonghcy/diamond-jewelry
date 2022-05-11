import React, { useState } from "react";
import styles from "./LikeItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function LikeItem(props) {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(props.price);

  const onRemoveButtonClick = () => {
    console.log(props.name);
    alert("nút xóa sản phẩm: " + props.name);
  };

  const onPayButtonClick = () => {
    alert("nút thêm vào giỏ hàng: " + props.name);
  };

  function Avail() {
    const isAvail = props.avail;
    if (isAvail == true) {
      return <td className={styles.avail}>Còn hàng</td>;
    }
    return <td className={styles.notavail}>Hết hàng</td>;
  }
  return (
    <>
      <tr className={styles.like_item}>
        <td>
          <button
            id="remove-button"
            onClick={onRemoveButtonClick}
            className={styles.remove_button}
          >
            <i className="fa fa-trash-o mr-1" />
          </button>
        </td>
        <td>
          <img src={props.image} alt={props.name} />
        </td>
        <td>{props.name}</td>
        <td className={styles.price}>{formattedPrice}</td>
        <td> {props.added_day}</td>
        <Avail isAvail={props.avail} />
        <td>
          <button
            id="pay-button"
            onClick={onPayButtonClick}
            className={styles.pay_button}
          >
            <i className="fa fa-shopping-basket mr-1" />
          </button>
        </td>
      </tr>
    </>
  );
}
