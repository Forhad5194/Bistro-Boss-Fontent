import BossImg from "../../Components/BossImg/BossImg";
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
        </div>
    );
};

export default Home;