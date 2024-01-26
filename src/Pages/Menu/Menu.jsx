import { Helmet } from "react-helmet-async";
import coverimg from '../../assets/menu/banner3.jpg'
import Cover from "../Shared/Cover/Cover";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from '../../assets/home/chef-service.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet
                title="BISTRO BOSS || MENU"

            />
            <Cover img={coverimg} title="OUR MENU" subTitle="Would you like to try a dish?" ></Cover>
             <SectionTitle 
              heading={'dont,t Miss '}
              subHeading={'TODAY, S OFFER'}
        
             />
            
            <MenuCategory items={offered} ></MenuCategory>
            <MenuCategory items={desserts} title={'desserts'} img2={dessertImg} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>

            <MenuCategory items={pizza} img2={pizzaImg} title={'PIZZA'}  subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>

            <MenuCategory items={salad} title={'salad'} img2={saladImg} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>

            <MenuCategory items={soup} title={'soup'} img2={soupImg} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>






          

        </div>
    );
};

export default Menu;