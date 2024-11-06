import { createBrowserRouter } from "react-router-dom";
import Product from "../pages/products/Product";
import Layout from "../layout/Layout";
import CreateProduct from "../pages/createProduct/CreateProduct";
import Contact from "../pages/contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Product/>
            },
            {
                path:"/create-product",
                element: <CreateProduct/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    }
])