import React from "react"
import
    function poliProfile() {

        return (
            <div className="student-profile py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card shadow-sm">
                                <div className="card-header bg-transparent text-center">
                                    <img className="profile-img" src="" alt="">
                                        <h3>USERNAME</h3>
                                </div>
                                <div className="card-body">
                                    <p className="mb-0"><strong className="">Following </strong>90</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card shadow-md">

                                <div style="height: 26px"></div>
                                <div className="card shadow-md">
                                    <div className="card-header bg-transparent border-0">
                                        <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Other Information</h3>
                                    </div>
                                    <div className="card-body pt-0">
                                        <button type="button" className="btn btn-outline-dark flex-grow-2">Chat</button>
                                        <button type="button" className="btn btn-outline-dark flex-grow-2">Follow</button>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

export default poliProfile;