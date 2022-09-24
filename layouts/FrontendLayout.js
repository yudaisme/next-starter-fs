import Header from './frontend/Header'
import Footer from './frontend/Footer'
import NextNProgress from "nextjs-progressbar"

const FrontendLayout = ({children}) => {
    return (
        <>
            <NextNProgress />
            <Header />
            {children}
            <Footer />
        </>
    );
}
 
export default FrontendLayout;