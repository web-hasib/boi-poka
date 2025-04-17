import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img 
          src="book.gif"
          className="max-w-sm rounded-lg m-5 bg-base-200"
        />
        <div>
          <h1 className="text-6xl py-8 ml-7 font-bold font-serif text-gray-700 ">Books to freshen up your bookshelf.</h1>
          
          <button className="btn ml-7 rounded-3xl bg-yellow-400 text-lg font-bold text-gray-500 hover:bg-yellow-200 p-5">View the list</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
