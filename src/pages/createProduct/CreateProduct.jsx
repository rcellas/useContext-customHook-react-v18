import { useState } from "react"
import { Link } from "react-router-dom"
import { createProduct } from "../../service/ApiProductsService";
import { useNavigate } from "react-router-dom";


const CreateProduct = () => {

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagenUrl, setImagenUrl] = useState("");

    const navigate = useNavigate();

    const addProduct = async (event) => {
        event.preventDefault()
        const newProduct = {
            title: titulo,
            description: descripcion,
            price: precio,
            imageUrl: imagenUrl
        }
        await createProduct(newProduct);
        navigate("/");
    }

    return (
        <>
            <form onSubmit={addProduct}>
                <div>
                    <label>Titulo</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(event) => setTitulo(event.target.value)}
                    />
                </div>
                <div>
                    <label>Descripcion</label>
                    <input
                        type="text"
                        value={descripcion}
                        onChange={(event) => setDescripcion(event.target.value)}
                    />
                </div>
                <div>
                    <label>Precio</label>
                    <input
                        type="text"
                        value={precio}
                        onChange={(event) => setPrecio(event.target.value)}
                    />
                </div>
                <div>
                    <label>Imagen url</label>
                    <input
                        type="text"
                        value={imagenUrl}
                        onChange={(event) => setImagenUrl(event.target.value)}
                    />
                </div>
                <button type="submit">Añadir Product</button>
                <Link to={"/"}><button>Cancelar</button></Link>
            </form>
        </>
    )
}

export default CreateProduct