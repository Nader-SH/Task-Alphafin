import Header from "../components/Header";
import PageCards from "../components/Card";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <nav className="bg-white shadow-md">
            <Header />
            <PageCards />
            <Footer />
        </nav>
    );
}


export default LandingPage;