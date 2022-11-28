import React from "react";
import './user.css';

import function Userprofile() {
    return (

        <div className="container">
            <div className="row gx-12">
                <div className="col-md-12 mb-12">
                    <div className="bg-image hover-overlay">
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/080.webp" className="img-fluid" />
                        <div className="row justify-content-center" id="team-cards">

                            <div className="col-12 ">
                                <div className="card-header">;
                                    <h2 className="person">username
                                        <span className="material-symbols-outlined">
                                            person</span>
                                    </h2>
                                </div>
                                <div className="user-body">
                                    <p className="using">Following: 12 </p>
                                    <p className="using">Likes<span className="material-symbols-outlined">
                                        favorite
                                    </span>12</p>
                                </div>
                            </div>
                            <div className=" col-md-12 mb-12">
                                <div className="card shadow-md">
                                    <div style="height: 26px"></div>
                                    <div className="card shadow-md">
                                        <div className="card-header bg-transparent border-0">
                                            <h3 className="mb-0">Other Information</h3>
                                        </div>
                                        <div className="card-body pt-0">

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor
                                                incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor
                                                incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor
                                                incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Userprofile;