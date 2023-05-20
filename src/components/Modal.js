// import React from "react"
import React from "react";
// import the AiOutlineCloseCircle icon from react-icons/ai
import { AiOutlineCloseCircle } from "react-icons/ai";
// import the Home.css file for styling
import "./Home.css";

// define the Modal component
const Modal = ({ show, item, onClose }) => {
  // check if show is falsy
  if (!show) {
    // if yes, return null
    return null;
  }
  // get the book image link from the item object
  let bookFigLink = item.volumeInfo.imageLinks.smallThumbnail;
  // get the book price from the item object
  let bookPrice = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
  // return the JSX for the Modal component
  return (
    <>
      {/* render a div with the modalContainer className */}
      <div className='modalContainer'>
        {/* render a div with the modal className */}
        <div className='modal'>
          {/* render a button with the closeModal className and an icon for closing the modal */}
          <button className='closeModal' onClick={onClose}>
            <AiOutlineCloseCircle />
          </button>
          {/* render a div with the innerModal className */}
          <div className='innerModal'>
            {/* render an image element for the book image */}
            <img src={bookFigLink} className='bookImg1' alt='' />
            {/* render a div with the desp className */}
            <div className='desp'>
              {/* render a heading for the book title */}
              <h1>{item.volumeInfo.title}</h1>
              {/* render a subheading for the book authors */}
              <h3>-Authored by {item.volumeInfo.authors}</h3>
              {/* render a paragraph for the book publisher */}
              <h4>Published by {item.volumeInfo.publisher}</h4>
              {/* render a span for the book price */}
              <span>₹ {bookPrice}</span>
              <br />
              {/* render an anchor element with a link to the book preview */}
              <a href={item.volumeInfo.previewLink}>
                {/* render a button element with More text */}
                <button className='modalButton'>More</button>
              </a>
            </div>
          </div>
          {/* render a paragraph with the brief className and the book description */}
          <h4 className='brief'>{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

// export the Modal component as default
export default Modal;
