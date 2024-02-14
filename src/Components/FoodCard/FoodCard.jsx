import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";



const FoodCard = ({ item }) => {

    const { name, image, recipe, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate()
    const loaction = useLocation()



    const handleAddToCard = foot => {

        if (user && user.email) {
            console.log(user.email , foot);

            const cardItems = {

                menuId: _id,
                email: user.email,
                name,
                price,
                image,
                
            }
            axios.post('http://localhost:5000/cards', cardItems)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${name}`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })



        }
        else {
            Swal.fire({
                title: "You are NOT logged in",
                text: "please login to add to card ",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login "
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/Login' , {state: {from: loaction}})
                  
                }
              });
        }
    };


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="">
                <img src={image} alt="" />
            </figure>
            <p className="bg-slate-900 absolute right-0 mr-4 mt-4 top-5 px-4  text-white font-bold">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => {
                        handleAddToCard(item)
                    }} className="btn btn-outline  text-[#BB8506]  border-0 border-b-4 uppercase">Add to card </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;