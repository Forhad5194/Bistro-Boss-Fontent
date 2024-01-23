import BossImg from "../../Components/BossImg/BossImg";
import CallUs from "../../Components/CallUs/CallUs";
import Recommend from "../../Components/Recommend/Recommend";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import OurMenu from "../OurMenu/OurMenu";
import PopularMenu from "../PopularMenu/PopularMenu";
import TestiMonials from "../TestiMonials/TestiMonials";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <BossImg />
            <PopularMenu />
            <CallUs/>
            <Recommend />
            <OurMenu />
            <TestiMonials />
        </div>
    );
};

export default Home;