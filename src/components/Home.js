// import React from "react"
import React, { useState } from "react";
// import the BsSearch icon from react-icons/bs
import { BsSearch } from "react-icons/bs";
// import the Home.css file for styling
import "./Home.css";
// import the Card component from ./Card
import Card from "./Card";
// import the axios library for making HTTP requests
import axios from "axios";

// define the Home component
const Home = () => {
  // use the useState hook to create a state variable for the search book value
  const [searchBook, setSearchBook] = useState("");
  // use the useState hook to create a state variable for the data array
  const [data, setData] = useState([]);

  // define a function to find the book by name if Enter key is pressed
  const findBook = (e) => {
    // check if the key pressed is Enter
    if (e.key === "Enter") {
      // define the API key for Google Books API
      const APIkey = "AIzaSyAFBlP0eKz2Zdsq8604bIuqAnW3-rjnzlw";
      // define the url for making the GET request with the search book value and API key
      const url = `https://www.googleapis.com/books/v1/volumes?q=${searchBook}&download=epub&key=${APIkey}&maxResults=40`;

      // use axios to make a GET request to the url
      axios
        .get(url)
        // handle the response received
        .then((res) => setData(res.data.items))
        // handle any error occurred
        .catch((err) => {
          // alert the error message
          alert(err.message);
        });
    }
  };
  // define a function to find the book by name if Search Icon is pressed
  const searchBooks = () => {
    // define the API key for Google Books API
    const APIkey = "AIzaSyAFBlP0eKz2Zdsq8604bIuqAnW3-rjnzlw";
    // define the url for making the GET request with the search book value and API key
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchBook}&download=epub&key=${APIkey}&maxResults=40`;

    // use axios to make a GET request to the url
    axios
      .get(url)
      // handle the response received
      .then((res) => setData(res.data.items))
      // handle any error occurred
      .catch((err) => {
        // alert the error message
        alert(err.message);
      });
  };

  // return the JSX for the Home component
  return (
    <>
      {/* render a div with the header className */}
      <div className='header'>
        {/* render a div with the para1 className */}
        <div className='para1'>
          {/* render an image element for showing a book stack */}
          <img
            src='https://cdn.pixabay.com/photo/2016/11/20/08/58/books-1842261_960_720.jpg'
            alt='book stack'
          />
        </div>
        {/* render a div with the para2 className */}
        <div className='para2'>
          {/* render a heading for the app */}
          <h2>Find Your Book !!!</h2>
          {/* render a div with the search className */}
          <div className='search'>
            {/* render an input element for entering the book name */}
            <input
              className='searchInput'
              type='text'
              placeholder='Enter the Book Name'
              value={searchBook}
              onChange={(e) => setSearchBook(e.target.value)}
              onKeyPress={findBook}
            />
            {/* render a button element with the BsSearch icon */}
            <button className='searchButton'>
              <BsSearch onClick={searchBooks} />
            </button>
          </div>
          {/* render an image element for showing a book stack */}
          <img
            src='https://cdn.pixabay.com/photo/2016/11/29/22/02/white-male-1871436_960_720.jpg'
            alt='book-stack'
          />
        </div>
      </div>
      {/* render a subheading for finding books */}
      <h3>Find the Book suits you...</h3>
      {/* render a div with the bookContainer className */}
      <div className='bookContainer'>
        {/* render a Card component and pass data as prop */}
        {<Card book={data} />}
      </div>
    </>
  );
};

// export the Home component as default
export default Home;
