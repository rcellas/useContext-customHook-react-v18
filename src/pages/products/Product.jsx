import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom"
import { getAllProducts } from "../../service/ApiProductsService";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductContext";

const Product = () => {
    //utiliza desestructuración para extraer directamente la propiedad products del objeto que proporciona el contexto ProductContext.
    const{ products} = useContext(ProductContext);

    return (
        <>
            <Link to={"/create-product"}><button>Añadir Producto</button></Link>
            {
                products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <img src={product.imageUrl} alt="" />
                    </div>
                ))
            }
        </>
    )
}

export default Product