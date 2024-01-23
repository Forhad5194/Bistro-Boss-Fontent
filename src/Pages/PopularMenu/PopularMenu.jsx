import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Allmenu from "../Shared/Allmenu/Allmenu";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'popular');

        setMenu(popularItems)
      })

  }, [])
  console.log(menu);
  return (
    <section className="mb-8 ">
      <SectionTitle
        heading={'---Check it out---'}
        subHeading={'FROM OUR MENU'}
      />

      <div className="grid md:grid-cols-2 gap-5">
        {

          menu.map(item => <Allmenu

            key={item._id}
            item={item}

          >
          </Allmenu>)
        }

      </div>

      <div className=" text-center mt-8">
      <button className="btn btn-active btn-primary">View Full  Menu</button>

      </div>

    </section>
  );
};

export default PopularMenu;