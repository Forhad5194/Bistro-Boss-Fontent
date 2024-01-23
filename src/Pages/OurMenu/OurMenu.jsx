import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import menuimg from '../../assets/home/featured.jpg'
import './OurMenu.css'
const OurMenu = () => {
    return (
        <section className='menuItems bg-fixed'>
            <SectionTitle
                heading={'Check it out'}
                subHeading={'FROM OUR MENU'}

            />
            <div className='md:flex justify-center items-center py-8 px-10 my-20 mb-20  '>
                <div>
                    <img className='w-[648px] h-[350px]' src={menuimg} alt="" />
                </div>
                <div className='md:ml-10 text-white  font-normal'>
                    <h4 className='uppercase mb-4 text-xl'>March 20, 2023</h4>
                    <h4 className='uppercase  '>March 20, 2023</h4>
                    <p className='uppercase  '>WHERE CAN I GET SOME?</p>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error <br /> voluptate facere, deserunt dolores maiores quod nobis quas <br /> quasi. Eaque repellat recusandae ad laudantium tempore <br /> consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline btn-primary border-0 border-b-4 uppercase">Read more </button>

                </div>
            </div>
        </section>
    );
};

export default OurMenu;