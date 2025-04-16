// import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

// const Book = ({bookPromise}) => {
const Book = ({ book }) => {
  // const bookData = use(bookPromise);
  // console.log(bookData);
//   console.log(book);
  const {
    bookId,
    rating,
    author,
    image,
    bookName,
    category,
    tags,
    yearOfPublishing,
  } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 md:w-auto shadow-sm border border-gray-50 shadow-2xl">
        <figure className="p-3 bg-gray-100 m-5 rounded-lg">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex gap-4">
            {tags.map((tag, index) => (
              <div key={index} className="badge">{tag}</div>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p className="text-xs font-thin">Book by : {author}</p>
          <div className="border-t border-dashed text-gray-300"></div>
          <div className="card-actions justify-end">
            <div className="badge ">{category}</div>
            <div className="badge">
              {rating} <FaStarHalfAlt color="gold" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
