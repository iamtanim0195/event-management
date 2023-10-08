import Banner from "../../components/Header/Banner/Banner"
import AboutUs from "../../components/Section/AboutUs"
import ContactUs from "../../components/Section/ContactUs"
import Services from "../../components/Section/Services/Services"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    )
}

export default Home