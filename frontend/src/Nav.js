import { colors } from './Colours';
import logo from "./Images/logo.svg";
import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <div className=" col-1 min-vh-100 h-100 py-3 nav" style={{ background: colors.MainColor }} >
            <div className='logo col-12 text-center' >
                <img className=" col-8" src={logo} alt='/' />
            </div>
            <div className='my-auto'>
                <div className='border border-start-0 border-end-0 border-top-0 mx-1'></div>
                <div className='text-center border border-start-0 border-end-0 mx-1 py-2' ><Link to="/" className='text-decoration-none fonts' style={{ color: colors.textColor }}>Home</Link></div>
                <div className='text-center border border-start-0 border-end-0 mx-1 py-2' ><Link to="/ContactUs" className='text-decoration-none fonts' style={{ color: colors.textColor }}>Contact us</Link></div>
                <div className='text-center border border-start-0 border-end-0 mx-1 py-2' ><Link to="/AboutUs" className='text-decoration-none fonts' style={{ color: colors.textColor }}>about us</Link></div>
                <div className='border border-start-0 border-bottom-0 border-end-0 mx-1 '></div>
            </div>
            <div className=''>
                <hr/>
                <div className='text-center' ><Link to="/Signup" className='text-decoration-none text-dark fonts' >Signup</Link></div>
                <hr/>
                <div className='text-center' ><Link to="/Signin" className='text-decoration-none text-dark fonts' >Sigin</Link></div>
            </div>
        </div>
    );
}