
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";
// import { ErrorBoundary } from "react-error-boundary";



export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      // errorElement : <ErrorPage />,
      errorElement: <ErrorPage />,
      children: [
        {
            index: true,
            loader: () => fetch('booksData.json'), // Replace with your API endpoint
            path: "/",
            Component: Home,
            
        }, 
        {
          path: '/about',
          Component: About
        },
        {
          path: '/readList',
          loader: () => fetch('booksData.json'),
          Component: ReadList 
        },
        {
          path: '/bookDetails/:id',
          loader: () => fetch('booksData.json'),
          Component: BookDetails
        }
      ] 
     
    },
  ]);