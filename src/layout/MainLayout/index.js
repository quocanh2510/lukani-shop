import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '~/components/ScrollToTop';

function MainLayout({ children }) {
    return (
        <>
            <Header backgroundWhite />
            {children}
            <ScrollToTop />
            <Footer />
        </>
    );
}

export default MainLayout;
