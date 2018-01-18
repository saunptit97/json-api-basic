import React from "react";
import Home from "./pages/HomePage/Home";
import NotFound from "./pages/NotFoundPage/NotFound";
import Contact from "./pages/ContactPage/Contact";
import About from "./pages/AboutPage/About";
import Products from "./pages/ProductListPage/Products";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />
  },
  {
    path: "/product-list",
    exact: false,
    main: () => <Products />
  },
  {
    path: "/product/add",
    exact: false,
    main: ({ history }) => <ProductActionPage history={history} />
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({ match, history }) => (
      <ProductActionPage history={history} match={match} />
    )
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
];
export default routes;
