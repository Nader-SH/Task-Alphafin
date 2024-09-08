import Header from "../components/Header";
import PageCards from "../components/Card";
import Footer from "../components/Footer";
import MissionAndStory from "../components/MissionAndStory";
import OurServices from "../components/Services";
import TalkTo from "../components/TalkTo";
import FounderCard from "../components/FounderCard";

const LandingPage = () => {
    return (
        <nav className="bg-white shadow-md">
            <Header />
            <PageCards />
            <MissionAndStory />
            <OurServices />
            <FounderCard />
            <TalkTo />
            <Footer />
        </nav>
    );
}


export default LandingPage;