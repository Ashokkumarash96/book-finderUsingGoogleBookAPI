import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./Home.css";

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let bookFigLink = item.volumeInfo.imageLinks.smallThumbnail;
  let bookPrice = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
  return (
    <>
      <div className='modalContainer'>
        <div className='modal'>
          <button className='closeModal' onClick={onClose}>
            <AiOutlineCloseCircle />
          </button>
          <div className='innerModal'>
            <img src={bookFigLink} className='bookImg1' alt='' />
            <div className='desp'>
              <h1>{item.volumeInfo.title}</h1>
              <h3>-Authored by {item.volumeInfo.authors}</h3>
              <h4>Published by {item.volumeInfo.publisher}</h4>
              <span>₹ {bookPrice}</span>
              <br />
              <a href={item.volumeInfo.previewLink}>
                <button className='modalButton'>More</button>
              </a>
            </div>
          </div>
          <h4 className='brief'>{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
