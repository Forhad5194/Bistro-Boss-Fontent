import BossImg from "../../Components/BossImg/BossImg";
import CallUs from "../../Components/CallUs/CallUs";
import Recommend from "../../Components/Recommend/Recommend";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <BossImg />
            <PopularMenu />
            <CallUs/>
            <Recommend />
        </div>
    );
};

export default Home;