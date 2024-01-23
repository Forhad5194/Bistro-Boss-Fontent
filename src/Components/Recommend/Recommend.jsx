import SectionTitle from "../SectionTitle/SectionTitle";
import cardimg from "../../assets/home/slide1.jpg"
const Recommend = () => {
    return (
        <section className="mb-24">
            <SectionTitle

                heading={'Should Try'}
                subHeading={'CHEF RECOMMENDS'}
            />

            <div className="flex  gap-6">
                <div className="card w-[424px] h-[480px] bg-base-100 shadow-xl">
                    <figure className="">
                        <img src={cardimg} alt="" className=" w-[424px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[424px] h-[480px] bg-base-100 shadow-xl">
                    <figure className="">
                        <img src={cardimg} alt="" className=" w-[424px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[424px] h-[480px] bg-base-100 shadow-xl">
                    <figure className="">
                        <img src={cardimg} alt="" className=" w-[424px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>





        </section>
    );
};

export default Recommend;