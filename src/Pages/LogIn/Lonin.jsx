import React, { useEffect, useRef, useState } from 'react';
import LoginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const captchaRef = useRef(null)
    const navegate = useNavigate()
    const loaction = useLocation()

    const from = loaction.state?.from?.pathname || "/";
    console.log('chacked to state and parth', loaction.state);



    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        Swal.fire({
            title: "user login successfully ",
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        });

        navegate(from, { replace: true });
    };

    const validateCaptchas = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
    }




    return (
        <div>
            <Helmet

                title='BISTRO || Login'

            />
            <div className="hero min-h-screen ">
                <div className="hero-content flex ">
                    <div className="text-center   md:w-1/2  lg:text-left">
                        <img className='w-[648px] h-[355px]' src={LoginImg} alt="" />
                    </div>
                    <div className="card shrink-0 md:w-1/2 max-w-sm">
                        <h2 className='text-black font-bold text-4xl text-center'>Login </h2>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">

                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={validateCaptchas} type="text" ref={captchaRef} name='captcha' placeholder=" type captcha  " className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" disabled={disabled} className='btn btn-primary' value={'Login'} />

                            </div>
                        </form>
                        <p className='text-center text-[#D1A054] font-bold text-xl'>
                            <small>New Here !</small> <Link to={'/SingUp'}>Create an Account.</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;