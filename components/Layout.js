import Hero from "./Hero"
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Hero />
            {children}
            {/* <Footesr /> */}
        </>
    )
}

export default Layout;