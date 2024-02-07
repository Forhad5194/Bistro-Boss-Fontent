

const FoodCard = ({item}) => {

    const {name, image, recipe, price} = item;

 
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="">
                <img src={image} alt=""/>
            </figure>
                <p className="bg-slate-900 absolute right-0 mr-4 mt-4 top-5 px-4  text-white font-bold">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                <button className="btn btn-outline  text-[#BB8506]  border-0 border-b-4 uppercase">Add to card </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;