
// el provider es como el proveedor de telefonias moviles y lo que hace el children es la distribución de esa información a diferentes componentes dentro de nuestra app
import { ProductContext } from "./ProductContext";      
import useProducts from "../../hooks/useProducts";

const ProductProvider = ({ children }) => {
    const { products, setProducts } = useProducts();
    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
