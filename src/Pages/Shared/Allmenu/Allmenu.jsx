
const Allmenu = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex space-x-5">
            <img  style={{borderRadius:'0 180px 180px 180px'}} className="w-[90px]" src={image} alt="" />
            <div>
                <h2 className="uppercase text-xl font-normal">{name}------------------</h2>
                <p className="text-xl font-normal">{recipe}</p>
            </div>
            <p className="text-yellow-500 font-bold"> ${price}</p>
        </div>
    );
};

export default Allmenu;