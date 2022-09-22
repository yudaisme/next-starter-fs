import Header from './frontend/Header'
import Footer from './frontend/Footer'

const FrontendLayout = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
 
export default FrontendLayout;