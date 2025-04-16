// import React, { Suspense, useEffect, useState } from 'react';
import { Suspense } from 'react';
import Book from '../Book/Book.jsx';

const Books = ({data}) => {
    // const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch('booksData.json')
    //         .then(response => response.json())
    //         .then(data => setAllBooks(data))
    //         .catch(error => console.error('Error fetching books:', error));
    // }, []);

    // const bookPromise = fetch ('booksData.json') 
    // .then(response => response.json())

    // console.log(allBooks);
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6 '>

            <Suspense fallback={<div>Loading...</div>}>
            {
                data.map(book => <Book key={book.bookId} book={book} />)
            }
            </Suspense>
            </div>
        </div>
    );
};

export default Books;