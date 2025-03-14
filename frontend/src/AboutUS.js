import { useEffect, useState } from "react";
import Nav from "./Nav";
import { colors, Colours } from "./Colours";
import img1 from "./Images/Img1.png";
import img2 from "./Images/Img2.jpg";
import img3 from "./Images/Img3.jpg";
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function AboutUs() {
    const [width, subwidth] = useState();

    useEffect(() => {
        const ref = document.getElementById("main").clientWidth;
        console.log(ref);
        subwidth(ref);
    }, [])
    return (
        <div className="container-fluid p-0 d-flex align-item-center min-vh-100 h-100"  >
            <Nav />
            <div className="w-100 bg-dark overflow-auto py-5" style={{ height: "100vh" }} id="main" >
                <div className="d-flex align-items-center justify-content-center">
                    {
                        (width != undefined) && (<Colours size={width} />)
                    }
                    <div className=" row col-10 p-5 mt-5" style={{ color: colors.textColor }}>
                        <div className="col-12 row rounded-pill p-0 overflow-hidden my-3" style={{ border: "2px solid", borderColor: colors.headingColor, background: colors.MainColor }} >
                            <div className="col-3 p-1">
                                <img src={img1} className="col-12 bg-white rounded-circle object-fit" />
                            </div>
                            <div className="col-9 row">
                                <div className=" row mt-auto fs-5" >
                                    <div className="col-4 text-end" >Name : </div>
                                    <div className="col-8">Taranjeet Singh</div>
                                    <div className="col-4 text-end">Work : </div>
                                    <div className="col-8">Full Stack Development</div>
                                    <div className="col-4 text-end">Email : </div>
                                    <div className="col-8">1080taranjeetsingh@gmail.com</div>
                                </div>
                                <div className="col-12 fs-1 d-flex justify-content-evenly align-items-center" style={{ color: "black" }}>
                                    <FaLinkedin />
                                    <FaFacebookSquare />
                                    <FaInstagramSquare />
                                    <FaSquareXTwitter />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 row rounded-pill p-0 overflow-hidden my-3" style={{ border: "2px solid", borderColor: colors.headingColor, background: colors.MainColor }} >
                            <div className="col-3 p-1">
                                <img src={img2}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        aspectRatio: '1 / 1',
                                    }}
                                    className="col-12 bg-white rounded-circle" />
                            </div>
                            <div className="col-9 row">
                                <div className=" row mt-auto fs-5" >
                                    <div className="col-4 text-end" >Name : </div>
                                    <div className="col-8">Satbir Singh</div>
                                    <div className="col-4 text-end">Work : </div>
                                    <div className="col-8">UI/UX Designer</div>
                                    <div className="col-4 text-end">Email : </div>
                                    <div className="col-8">satbirsinghubhi@gmail.com</div>
                                </div>
                                <div className="col-12 fs-1 d-flex justify-content-evenly align-items-center" style={{ color: "black" }}>
                                    <FaLinkedin />
                                    <FaFacebookSquare />
                                    <FaInstagramSquare />
                                    <FaSquareXTwitter />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 row rounded-pill p-0 overflow-hidden my-3" style={{ border: "2px solid", borderColor: colors.headingColor, background: colors.MainColor }} >
                            <div className="col-3 p-1">
                                <img src={img3}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        aspectRatio: '1 / 1',
                                        objectFit: 'cover'
                                    }}
                                    className="col-12 bg-white rounded-circle" />
                            </div>
                            <div className="col-9 row">
                                <div className=" row mt-auto fs-5" >
                                    <div className="col-4 text-end" >Name : </div>
                                    <div className="col-8">Tarsem Singh</div>
                                    <div className="col-4 text-end">Work : </div>
                                    <div className="col-8">Data Science</div>
                                    <div className="col-4 text-end">Email : </div>
                                    <div className="col-8">12tarsem3@gmail.com</div>
                                </div>
                                <div className="col-12 fs-1 d-flex justify-content-evenly align-items-center" style={{ color: "black" }}>
                                    <FaLinkedin />
                                    <FaFacebookSquare />
                                    <FaInstagramSquare />
                                    <FaSquareXTwitter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}