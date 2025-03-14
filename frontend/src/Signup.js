import Nav from "./Nav";
import { colors, Colours } from "./Colours";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Signup() {
    const [width, subwidth] = useState();
    const [password, setpassword] = useState();
    const [email, setemail] = useState();
    const [type, settype] = useState({ type: "password", icon: <FaEyeSlash /> });

    const uri = "http://127.0.0.1:8000/api/";

    const submit = async () => {
        axios.post(uri + "create-user/", { email, password }).then((succ) => {
            console.log(succ.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        const ref = document.getElementById("main").clientWidth;
        console.log(ref);
        subwidth(ref);
    }, [])

    return (
        <div className="container-fluid p-0 d-flex align-item-center min-vh-100 h-100"  >
            <Nav />
            <div className="w-100 bg-dark min-vh-100 h-100 overflow-auto d-flex align-items-center justify-content-center" id="main" >
                {
                    (width != undefined) && (<Colours size={width} />)
                }
                <div className="col-8 row">
                    <div className="col-6 " >
                        <div className="fs-2 text-center" style={{ color: colors.headingColor }} >Signup</div>
                        <form className="m-3">
                            <div className=" my-3">
                                <label className="text-white">Email</label>
                                <input type="email"
                                    onChange={(e) => setemail(e.currentTarget.value)}
                                    className="w-100 rounded border-top-0 border-start-0 border-end-0 bg-transparent"
                                    style={{ color: colors.textColor, outline: "none", borderColor: colors.headingColor }} />
                            </div>
                            <div className="my-3">
                                <label className="text-white">Password</label>
                                <div className="border-2 form-control border-top-0 border-start-0 border-end-0 bg-transparent d-flex align-items-center" style={{ borderColor: colors.headingColor }} >
                                    <input className="w-100 border border-0 m-0 p-0 bg-transparent"
                                        onChange={(e) => setpassword(e.currentTarget.value)}
                                        style={{ color: colors.textColor, outline: "none" }}
                                        type={type.type}></input>
                                    <div className="col-1 text-center"
                                        onClick={() => (type.type == "password") ? (settype({ type: "text", icon: <FaEye /> })) : (settype({ type: "password", icon: <FaEyeSlash /> }))}
                                        style={{ color: colors.headingColor }} >{type.icon}</div>

                                </div>
                            </div>
                        </form>
                        <div className="d-flex align-items-center justify-content-center mx-5 py-3" >
                            <div className="w-100 border"></div>
                            <div className="fs-4 px-3 text-center" style={{ color: colors.headingColor }} >OR</div>
                            <div className="w-100 border"></div>
                        </div>
                        <div className="col-12 btn-group my-3 px-3">
                            <div className=" btn btn text-white" style={{ background: colors.MainColor }}>Google</div>
                            <div className="border border-2"></div>
                            <div className=" btn btn text-white" style={{ background: colors.MainColor }}>facbook</div>
                        </div>
                        <div className="btn btn-success m-3 px-5 float-end" onClick={submit} >Submit</div>
                    </div>
                    <div className="col-6 signup-bg">

                    </div>
                </div>
            </div>
        </div>
    )
}