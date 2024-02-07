import React from 'react';
import { Helmet } from 'react-helmet-async';
import SingUpImg from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SingUp = () => {

    const {
        register,
        handleSubmit,
     
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        
        console.log(data);
    
    
    }
 




    return (
        <div>
            <Helmet

                title='BISTRO || Sing Up'

            />
            <div className="hero min-h-screen ">
                <div className="hero-content flex ">
                    <div className="text-center   md:w-1/2  lg:text-left">
                        <img className='w-[648px] h-[355px]' src={SingUpImg} alt="" />
                    </div>
                    <div className="card shrink-0 md:w-1/2 max-w-sm">
                        <h2 className='text-black font-bold text-4xl text-center'>Please Sing Up </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" {...register("name", { required: true }) } name='name' className="input input-bordered" required />
                                {errors.name && <span> Name is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email" , { required: true })} name='email' className="input input-bordered" required />
                                {errors.email && <span className='text-red-500'>Email  is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password", { required: true, minLength: 8, maxLength: 20 })} placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <p>
                                     Password must be at least 8 characters
                                    </p>}
                                {errors.password && <span className='text-red-500'>Password  is required</span>}
                                <label className="label">

                                </label>
                            </div>
                          
                            <div className="form-control mt-6">
                                <input type="submit"  className='btn btn-primary' value={'Sing UP '} />

                            </div>
                        </form>
                        <p className='text-center text-[#D1A054] font-bold text-xl'>
                            <small>Already registered? </small> <Link to={'/Login'}>Go to log in</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;