// import React from "react" and useState Hooks
import React, { useState } from "react";
// import the Home.css file for styling
import "./Home.css";
// import the Modal component from ./Modal
import Modal from "./Modal";

// define the Card component
const Card = ({ book }) => {
  // use the useState hook to create a state variable for the show flag
  const [show, setShow] = useState(false);
  // use the useState hook to create a state variable for the book item
  const [bookItem, setItem] = useState();

  // return the JSX for the Card component
  return (
    <>
      {/* map over the book array and render a div for each item */}
      {book.map((item) => {
        // get the book image link from the item object
        let bookFigLink = item.volumeInfo.imageLinks.smallThumbnail;
        // get the book price from the item object
        let bookPrice =
          item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        // check if book image link and book price are not undefined
        if (bookFigLink !== undefined && bookPrice !== undefined) {
          return (
            <>
              {/*render a div with the card className*/}
              <div
                className='card'
                // update the show and bookItem state on click event
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                {/* render an image element for the book image */}
                <img
                  className='bookImage'
                  src={bookFigLink}
                  alt={item.volumeInfo.title}
                />
                {/* render a div with the bookDesp className */}
                <div className='bookDesp'>
                  {/* render a heading for the book title */}
                  <h3 className='bookName'>{item.volumeInfo.title}</h3>
                  {/* render a paragraph for the book price */}
                  <p className='bookPrice'>₹ {bookPrice} /-</p>
                </div>
              </div>
              {/* render a Modal component and pass show, item and onClose props */}
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

// export the Card component as default
export default Card;
