import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Home.css";
import Card from "./Card";
import axios from "axios";

//GET

const Home = () => {
  const [searchBook, setSearchBook] = useState("");
  const [data, setData] = useState([]);

  const findBook = (e) => {
    if (e.key === "Enter") {
      const APIkey = "AIzaSyAFBlP0eKz2Zdsq8604bIuqAnW3-rjnzlw";
      const url = `https://www.googleapis.com/books/v1/volumes?q=${searchBook}&download=epub&key=${APIkey}&maxResults=40`;

      axios
        .get(url)
        .then((res) => setData(res.data.items))
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  return (
    <>
      <div className='header'>
        <div className='para1'>
          <img
            src='https://cdn.pixabay.com/photo/2016/11/20/08/58/books-1842261_960_720.jpg'
            alt='book stack'
          />
        </div>
        <div className='para2'>
          <h2>Find Your Book !!!</h2>
          <div className='search'>
            <input
              className='searchInput'
              type='text'
              placeholder='Enter the Book Name'
              value={searchBook}
              onChange={(e) => setSearchBook(e.target.value)}
              onKeyPress={findBook}
            />
            <button className='searchButton'>
              <BsSearch />
            </button>
          </div>
          <img
            src='https://cdn.pixabay.com/photo/2016/11/29/22/02/white-male-1871436_960_720.jpg'
            alt='book-stack'
          />
        </div>
      </div>
      <h3>Find the Book suits you...</h3>
      <div className='bookContainer'>{<Card book={data} />}</div>
    </>
  );
};

export default Home;
