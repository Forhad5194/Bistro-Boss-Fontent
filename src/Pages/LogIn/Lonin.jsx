import React, { useEffect, useRef, useState } from 'react';
import LoginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const captchaRef = useRef(null)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };

    const validateCaptchas = () => {
        const user_captcha_value = captchaRef.current.value;
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
                                <input type="text" ref={captchaRef} name='captcha' placeholder=" type captcha  " className="input input-bordered" required />
                                <button onClick={validateCaptchas} className="btn btn-outline btn-xs mt-5 ">Validate</button>

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