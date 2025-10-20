import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import Categories from "../Page/Categories/Categories";
import Contract from "../Page/Contract/Contract";
import BookDetailsSection from "../Components/BookCard/BookDetailsSection";
import SearchResult from "../Components/SearchBar/Searchresult";
import GenreBooks from "../Components/BookCard/GenreBooks";
// import CategoryDetails from "../Components/BookCard/GenreBook";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/categories",
        Component: Categories,
      },
      {
        path: "/contact",
        Component: Contract,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/book.json"),
        Component: BookDetailsSection,
      },
      {
        path: "/search",
        Component: SearchResult,
      },
      {
        path: "/genre/:genreName",
        Component: GenreBooks
      },
    ],
  },
]);
