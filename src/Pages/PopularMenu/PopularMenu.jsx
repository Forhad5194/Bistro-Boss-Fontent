
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Allmenu from "../Shared/Allmenu/Allmenu";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');

  return (
    <section className="mb-8 ">
      <SectionTitle
        heading={'---Check it out---'}
        subHeading={'FROM OUR MENU'}
      />

      <div className="grid md:grid-cols-2 gap-5">
        {

          popular.map(item => <Allmenu

            key={item._id}
            item={item}

          >
          </Allmenu>)
        }

      </div>

      <div className=" text-center mt-8">
        <button className="btn btn-outline btn-black  border-0 border-b-4 uppercase">View Full  Menu</button>

      </div>

    </section>
  );
};

export default PopularMenu;