import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    //   console.log( storedBookData);
    const myReadList = data.filter((book) =>
      storedBookData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type ) => {
    setSort(type);
    if (type === 'pages'){
        const sortedByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
        setReadList(sortedByPages);
        // console.log(sortedByPages);
    }
    if (type === 'ratings'){
        const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating);
        setReadList(sortedByRatings);
        // console.log(sortedByRatings);
    }

}

  return (
    <div>
      <div className="text-center p-6 m-5">
        <details className="dropdown">
          <summary className="btn m-1">Sort by :  {sort? sort : ''}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={()=> handleSort('pages')}> Pages</a>
            </li>
            <li>
              <a onClick={()=> handleSort('ratings')}>Rating</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Book list</Tab>
            <Tab>Wish list</Tab>
          </TabList>

          <TabPanel>
            <h2>Book i read {readList.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6 ">
              {readList.map((b) => (
                <Book key={b.bookId} book={b}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>My Wish list</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ReadList;
