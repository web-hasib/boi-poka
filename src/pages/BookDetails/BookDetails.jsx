import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStodedDB } from "../../utility/addToDB";
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

// const MySwal = withReactContent(Swal)

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  // console.log(id);
  const data = useLoaderData();
  // console.log(data);
  const singleBook = data.find((book) => book.bookId === bookId);
//   console.log(singleBook);
  const {
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    totalPages,
    yearOfPublishing,
    author,
    tags,
  } = singleBook;
  // console.log(singleBook);
  const handleMarkAsRead = (id) => {


//  sweet alert 


// MySwal.fire({
//   position: "top-end",
//   icon: "success",
//   title: "Your work has been saved",
//   showConfirmButton: false,
//   timer: 1500
// });
toast("Added to read list!");




    addToStodedDB(id);
    
  }

  return (
    <div className="w-full flex justify-center items-center p-6">
      <div className="flex bg-white rounded-lg shadow-md overflow-hidden max-w-3xl">
        <img  src={image} alt="Book Cover" className="h-full w-1/3 m-8" />

        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{bookName}</h2>
            <p className="text-sm text-gray-500 mb-2">By: {author}</p>
            <p className="text-sm font-medium text-gray-700 mb-2">{category}</p>

            <p className="text-sm text-gray-600 mb-4">
              <span className="font-semibold">Review:</span> {review}
            </p>

            <div className="mb-4">
              <div className="flex gap-4">
                {tags.map((tag, index) => (
                  <div key={index} className="badge">
                    # {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1 text-sm text-gray-700">
              <p>
                <span className="font-semibold">Number of Pages:</span>{" "}
                {totalPages}
              </p>
              <p>
                <span className="font-semibold">Publisher:</span> {publisher}
              </p>
              <p>
                <span className="font-semibold">Year of Publishing:</span>{" "}
                {yearOfPublishing}
              </p>
              <p>
                <span className="font-semibold">Rating:</span>
                {rating}
              </p>
            </div>
          </div>
          <ToastContainer />
          <div className="mt-4 flex space-x-3">
            <button onClick={()=> handleMarkAsRead(bookId)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
             Mark as Read
            </button>
            <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">
              Wishlist
            </button >
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
