import { useContext } from "react"
import { UserContext } from "../../context/UserContext/UserContext";

const Contact = () => {
    const user = useContext(UserContext);
    return (
        <>
            <h2>Esta es la pagina de contacto de {user}</h2>
        </>
    )
}

export default Contact