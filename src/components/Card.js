import React, { useState } from "react";
import "./Home.css";
import Modal from "./Modal";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  return (
    <>
      {book.map((item) => {
        let bookFigLink = item.volumeInfo.imageLinks.smallThumbnail;
        let bookPrice =
          item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (bookFigLink !== undefined && bookPrice !== undefined) {
          return (
            <>
              <div
                className='card'
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img
                  className='bookImage'
                  src={bookFigLink}
                  alt={item.volumeInfo.title}
                />
                <div className='bookDesp'>
                  <h3 className='bookName'>{item.volumeInfo.title}</h3>
                  <p className='bookPrice'>₹ {bookPrice} /-</p>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
      })}
    </>
  );
};

export default Card;
