import { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const colors = {
    MainColor: "rgb(0,130,127)",
    textColor: "white",
    headingColor: "rgb(50,205,50)"
}

var mode = <MdDarkMode />;

const Colours = (size) => {

    const modes = () => {
        if (mode == <MdLightMode />) {
            mode = <MdDarkMode />;
            window.location.reload();
        } else {
            mode = <MdLightMode />;
            window.location.reload();
        }
    }

    console.log(size.size);
    return (
        <div className="sub-nav px-5" style={{ width: size.size }}>
            {/* <div className="border rounded-pill py-1 px-5 d-flex align-items-center justify-content-between" style={{ background: "#ffffff" }}>
                <div className="fs-5" > Medicare</div>
                <div className="row">
                    <div className="col fs-5" onClick={modes}>{mode}</div>
                </div>
            </div> */}
        </div>
    )
}

export { colors, Colours };