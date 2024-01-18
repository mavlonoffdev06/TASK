import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Uncomment this line
import '../products/Products.css';
import Container from '@mui/material/Container';

const Products = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setBlogs(data); // Fix: setBlogs(data) instead of setBlogs(res)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="products">
      <Container>
        {blogs.map((item) => (
          <div className="products__card" key={item.book.id}>
            <p>Title: {item.book.title}</p>
            <p>Cover: {item.book.cover}</p>
            <p>Pages: {item.book.pages}</p>
            <p>Published: {item.book.published}</p>
            <p>ISBN: {item.book.isbn}</p>
            <p>Author: {item.book.author}</p>
            <br />
            <span className="products__card-bottom">
              <p>{item.book.author} / {item.book.published}</p>
              <button className="products__card-bottom__btn">New</button>
            </span>
            <div className="product__card-options">
              <Link className="" to={`/update/${item.book.id}`}>
                Update
              </Link>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Products;
