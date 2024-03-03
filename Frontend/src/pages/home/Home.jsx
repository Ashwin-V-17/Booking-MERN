import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navabar/Navbar";
import PropertyList from "./../../components/propertyList/PropertyList";
import FreaturedProperties from "./../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import "./home.css"
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Header></Header>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">
            Browse By property Type
          </h1>
         <PropertyList/>
         <h1 className="homeTitle">Home guests Love</h1>
         <FreaturedProperties/>
         <MailList/>
         <Footer/>
        </div>
    </div>
  )
}

export default Home;