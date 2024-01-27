import React from 'react';
import Allmenu from '../Shared/Allmenu/Allmenu';
import Cover from '../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img2, subTitle }) => {
    return (
        <div>
            <div className='pt-8'>
                {title && <Cover img={img2} title={title} subTitle={subTitle} ></Cover>}
                <div className="grid md:grid-cols-2 gap-5 mt-16">
                    {

                        items.map(item => <Allmenu

                            key={item._id}
                            item={item}

                        >
                        </Allmenu>)


                    }


                </div>
                <Link to={`/order/${title}`}>
                    <div className='text-center mt-12 mb-8 '>
                        <button className="btn btn-outline btn-black  border-0 border-b-4 uppercase">ORDER YOUR FAVOURITE FOOD</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;