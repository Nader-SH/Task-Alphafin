import Header from "../components/Header";
import PageCards from "../components/Card";
import Footer from "../components/Footer";
import MissionAndStory from "../components/MissionAndStory";

const LandingPage = () => {
    return (
        <nav className="bg-white shadow-md">
            <Header />
            <PageCards />
            <MissionAndStory />
            <Footer />
        </nav>
    );
}


export default LandingPage;