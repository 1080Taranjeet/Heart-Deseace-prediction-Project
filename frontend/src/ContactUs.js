import { useEffect, useState } from "react";
import { colors, Colours } from "./Colours";
import Nav from "./Nav";
import axios from "axios";

export default function ContactUS() {

    const [width, subwidth] = useState();

    const uri = "http://127.0.0.1:8000/api/";

    const submit = (e) => {
        e.preventDefault()
        const value = new FormData(e.currentTarget);
        const data = {
            Email:value.get("email"),
            Name:value.get("name"),
            Objective:value.get("objective"),
            Content:value.get("content")
        }

        axios.post(uri + "Contact/", data).then(succ => {
            console.log(succ.data);
            if (succ.data.acknowledged == "True") {
                alert("message was send successfuly");
            }
        }).catch(error => {
            console.log(error);
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
                <div className="p-5 col-8">
                    <form className="row ps-5" onSubmit={submit} style={{ borderLeft: "3px solid white", borderColor: colors.MainColor }}>
                        <p className="text-start fs-3" style={{ color: colors.headingColor }} >Contact US</p>
                        <div className="row">
                            <div className="col-6 p-3">
                                <label className="text-white">Name</label>
                                <input type="text"
                                    name="name"
                                    className="w-100 rounded border-top-0 border-start-0 border-end-0 bg-transparent"
                                    style={{ color: colors.textColor, outline: "none", borderColor: colors.headingColor }} />
                            </div>
                            <div className="col-6 p-3">
                                <label className="text-white">Email</label>
                                <input type="email"
                                    name="email"
                                    className="w-100 rounded border-top-0 border-start-0 border-end-0 bg-transparent"
                                    style={{ color: colors.textColor, outline: "none", borderColor: colors.headingColor }} />
                            </div>
                            <div className="col-12 p-3">
                                <label className="text-white">Objective</label>
                                <input type="text"
                                    name="objective"
                                    className="w-100 rounded border-top-0 border-start-0 border-end-0 bg-transparent"
                                    style={{ color: colors.textColor, outline: "none", borderColor: colors.headingColor }} />
                            </div>
                            <div className="col-12 p-3">
                                <label className="text-white my-4">Content</label>
                                <textarea
                                    name="content"
                                    rows="5"
                                    className="w-100 rounded bg-transparent"
                                    style={{ color: colors.textColor, outline: "none", borderColor: colors.headingColor }} />
                            </div>
                            <div className="col-12 p-3">
                                <input className="btn col-3 float-end " style={{ background: colors.MainColor, color: colors.textColor }} type="submit" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}