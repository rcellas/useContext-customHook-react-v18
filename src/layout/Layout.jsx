import { Outlet } from "react-router-dom"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import ProductProvider from "../context/ProductContext/ProductProvider"
import UserProvider from "../context/UserContext/UserProvider"

const Layout = () => {
    return (
        <>
            <UserProvider>
                <ProductProvider>
                    <Header/>
                    <Outlet/>
                    <Footer/>
                </ProductProvider>
            </UserProvider>
        </>
    )
}

export default Layout