import { useState, useEffect } from "react";
import { getAllProducts } from "../service/ApiProductsService";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    const getAllProductsFromApiService = async () => {
        const products = await getAllProducts();
        setProducts(products);
    };

    useEffect(() => {
        getAllProductsFromApiService();
    }, []);

    return { products, setProducts };
};

export default useProducts;
