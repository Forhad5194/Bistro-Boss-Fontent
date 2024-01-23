import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import icon from '../../assets/icon/Icon.png'

const TestiMonials = () => {

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))


    }, [])

    return (
        <section className="my-20">
            <SectionTitle
                heading={'What your Clients Say'}
                subHeading={'TESTIMONIALS'}

            />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    review.map(review => <SwiperSlide key={review._id}>{

                        <div className="m-24 text-center justify-center flex flex-col">
                            <Rating className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                isRequired
                            />

                            <img className="mx-auto mt-10" src={icon} alt="" />

                            <p>{review.details}</p>
                            <h3 className="text-2xl font-bold text-center text-yellow-500">{review.name}</h3>
                        </div>


                    }</SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default TestiMonials;