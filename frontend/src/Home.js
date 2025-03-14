import { useEffect, useState } from "react";
import Nav from "./Nav";
import { colors, Colours } from "./Colours";
import axios from "axios";

export default function Home() {

    const [width, subwidth] = useState();
    const [result, setresult] = useState();

    const uri = "http://127.0.0.1:5000";

    // const uri = "http://127.0.0.1:8000/api/";

    const submit = (e) => {
        e.preventDefault()
        const value = new FormData(e.currentTarget);
        const data = {
            DOB: value.get("DOB"),
            Blood_pressure: value.get("Blood-pressure"),
            Cholesterol: value.get("Cholesterol"),
            Max_HR: value.get("Max-HR"),
            ST_depression: value.get("ST-depression"),
            Chest_pain: value.get("chest-pain"),
            Gender: value.get("gender"),
            FPS: value.get("fps"),
            Number_of_vessels_fluro: value.get("vessels"),
            Thallium: value.get("Thallium"),
            Slope_of_ST: value.get("ST"),
            Exercise_angina: value.get("Exercise"),
            EKG: value.get("EKG")
        }

        axios.post(uri +
            //  "Data/"
                "/predict"
             , data).then(succ => {
            console.log(succ.data.predected);
            if (succ.data.predected.acknowledged == "True") {
                setresult(succ.data.predected.result);
                console.log(result);
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

        <div className="container-fluid p-0 d-flex align-item-center min-vh-100 h-100">
            <Nav />
            <div className="w-100 bg-dark px-5 overflow-auto d-flex align-items-center justify-content-center " style={{ height: "100vh" }} id="main">
                {
                    (width != undefined) && (<Colours size={width} />)
                }
                <div className="w-100 px-2 py-5" style={{ marginTop: "300px" }} >
                    <div className=" w-100 p-3"
                        style={{ background: colors.MainColor, border: "1px solid", borderColor: colors.headingColor }}
                    >
                        <div className="text-start fs-3" style={{ color: colors.headingColor }}>
                            Heart Disease Prediction
                            <div className="btn btn-info px-5 float-end me-4 text-white" style={{ background: colors.headingColor }}
                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                            >Result</div>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Results</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Chances of Heart Disease</p>
                                            <p>{result} %</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form className="row" onSubmit={submit}>
                            <div className="col-12 row">
                                <div className="col-2 my-3 ">
                                    <label className="form-lable py-1">DOB :</label>
                                    <input type="date" required name="DOB" className="form-control" />
                                </div>
                                <div className="col-2 my-3 ">
                                    <label className="form-lable py-1">Blood Pressure:</label>
                                    <input type="number" placeholder="only three digit number is required" required pattern="^-?\d{1,3}(\.\d+)?$" name="Blood-pressure" className="form-control" />
                                </div>
                                <div className="col-2 my-3 ">
                                    <label className="form-lable py-1">Cholesterol  :</label>
                                    <input type="number" placeholder="only three digit number is required" required pattern="^-?\d{1,3}(\.\d+)?$" name="Cholesterol" className="form-control" />
                                </div>
                                <div className="col-2 my-3 ">
                                    <label className="form-lable py-1">Max HR :</label>
                                    <input type="number" placeholder="only three digit number is required" required pattern="^-?\d{1,3}(\.\d+)?$" name="Max-HR" className="form-control" />
                                </div>
                                <div className="col-4 my-3">
                                    <label className="form-lable py-1">ST depression induced by exercise relative to rest:</label>
                                    <input type="number" step="0.01" required name="ST-depression" className="form-control" />
                                </div>
                                {/* <div className="col-3 my-3 mx-auto">
                                    <label className="form-lable py-1">Chest pain :</label>
                                    <input type="range" name="Chest-pain" max="4" min="0" className="form-control" style={{ background: "linear-gradient(to right, green, red)" }} />
                                </div> */}
                                <div className="col-6 rounded my-3" >
                                    <div className="p-3 rounded" style={{ background: colors.textColor }}>
                                        <label className="form-lable py-1">Chest pain :</label>
                                        <div className="mx-auto row my-3 rounded" style={{ background: colors.MainColor }}>
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="1" required name="chest-pain" />
                                                <div className="text-white">typical angina</div>
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="2" required name="chest-pain" />
                                                <div className="text-white" > atypical angina</div>
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="3" required name="chest-pain" />
                                                <div className="text-white" >non-anginal pain</div>
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="4" required name="chest-pain" />
                                                <div className="text-white" >asymptomatic</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 rounded my-3" >
                                    <div className="p-3 rounded" style={{ background: colors.textColor }}>
                                        <label className="form-lable py-1">number of major vessels (0-3) colored by flourosopy :</label>
                                        <div className="mx-auto row my-3 rounded" style={{ background: colors.MainColor }}>
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="0" required name="vessels" />
                                                <div className="text-white">One</div>
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="1" required name="vessels" />
                                                <div className="text-white" >Two</div>
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="2" required name="vessels" />
                                                <div className="text-white" >Three</div>
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="3" required name="vessels" />
                                                <div className="text-white" >Four</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 rounded my-3" >
                                    <div className="p-3 rounded" style={{ background: colors.textColor }}>
                                        <label className="form-lable py-1">Gender :</label>
                                        <div className="mx-auto row my-3 rounded" style={{ background: colors.MainColor }}>
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="1" required name="gender" />
                                                <div className="text-white">Male</div>
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="0" required name="gender" />
                                                <div className="text-white" >Female</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 rounded my-3">
                                    <div className="p-3 rounded" style={{ background: colors.textColor }}>
                                        <label className="form-lable py-1">fasting blood sugar > 120 mg/dl :</label>
                                        <div className="mx-auto row my-3 rounded" style={{ background: colors.MainColor }}>
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="1" required name="fps" />
                                                <div className="text-white">YES</div>
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="0" required name="fps" />
                                                <div className="text-white" >NO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 rounded my-3">
                                    <div className="p-3 rounded" style={{ background: colors.textColor }}>
                                        <label className="form-lable py-1">exercise induced angina :</label>
                                        <div className="mx-auto row my-3 rounded" style={{ background: colors.MainColor }}>
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="1" required name="Exercise" />
                                                <div className="text-white">YES</div>
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="0" required name="Exercise" />
                                                <div className="text-white" >NO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 rounded my-3">
                                    <div className="p-3 rounded" style={{ background: colors.textColor }}>
                                        <label className="form-lable py-1">the slope of the peak exercise ST segment  :</label>
                                        <div className="mx-auto row my-3 rounded" style={{ background: colors.MainColor }}>
                                            <div className="col-12 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="1" required name="ST" />
                                                <div className="text-white">upsloping</div>
                                            </div>
                                            <div className="col-12 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="2" required name="ST" />
                                                <div className="text-white" >flat</div>
                                            </div>
                                            <div className="col-12 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="3" required name="ST" />
                                                <div className="text-white" >downsloping</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 rounded my-3">
                                    <div className="p-3 rounded" style={{ background: colors.textColor }}>
                                        <label className="form-lable py-1">Thal  :</label>
                                        <div className="mx-auto row my-3 rounded" style={{ background: colors.MainColor }}>
                                            <div className="col-12 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="3" required name="Thallium" />
                                                <div className="text-white">normal</div>
                                            </div>
                                            <div className="col-12 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="6" required name="Thallium" />
                                                <div className="text-white" >fixed defect</div>
                                            </div>
                                            <div className="col-12 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="7" required name="Thallium" />
                                                <div className="text-white" >reversable defect</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 rounded my-3">
                                    <div className="p-3 rounded" style={{ background: colors.textColor }}>
                                        <label className="form-lable py-1">resting electrocardiographic results  :</label>
                                        <div className="mx-auto row my-3 rounded" style={{ background: colors.MainColor }}>
                                            <div className="col-12 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="0" required name="EKG" />
                                                <div className="text-white">normal</div>
                                            </div>
                                            <div className="col-12 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="1" required name="EKG" />
                                                <div className="text-white" >having ST-T wave abnormality</div>
                                            </div>
                                            <div className="col-12 d-flex align-items-center justify-content-start">
                                                <input type="radio" className="m-2" value="2" required name="EKG" />
                                                <div className="text-white" >showing probable or definite left ventricular hypertrophy by Estes' criteria</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <input type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" className=" col-3 btn btn-info text-white mx-auto mt-5" value="submit" />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}