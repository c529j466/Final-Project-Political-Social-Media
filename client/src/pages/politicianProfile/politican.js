import React from "react"
import './poli.css'

function Politician() {

    return (
        <div className="container">
            <div className="row gx-12">
                <div className="col-md-12 mb-12">
                    <div className="bg-image hover-overlay">
                        <img alt="pic" src="https://mdbcdn.b-cdn.net/img/new/slides/080.webp" className="img-fluid" />
                    </div>
                    <div className="col-12 ">
                        <div className="card-header">;
                            <h1 className="candidate">Politician Name

                            </h1>
                        </div>
                        <div className="user-body">
                            <p className="edit">Followers: 127 </p>
                            <p className="edit">Likes: 12 </p>
                            <div>
                                <h3 className="">About me</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nisi
                                    voluptatum vitae, veniam atque, inventore beatae repellendus vero illum
                                    deserunt
                                    maiores blanditiis esse saepe dolores eligendi quo expedita tempora!
                                    Laboriosam!</p>
                            </div>
                        </div>
                        <div className=" feed col-md-12 mb-12">
                            <div className="card shadow-md">
                                {/* <div style="height: 26px"></div> */}
                                <div className="card shadow-md">
                                    <div className="card-header bg-transparent border-0">
                                        <h3 className="mb-0">Feed</h3>
                                    </div>
                                    <div className="card-body pt-0" id="lo">

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor
                                            incididunt
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Reprehenderit
                                            nisi
                                            voluptatum vitae, veniam atque, inventore beatae repellendus vero
                                            illum
                                            deserunt
                                            maiores blanditiis esse saepe dolores eligendi quo expedita tempora!
                                            Laboriosam!</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Reprehenderit
                                            nisi
                                            voluptatum vitae, veniam atque, inventore beatae repellendus vero
                                            illum
                                            deserunt
                                            maiores blanditiis esse saepe dolores eligendi quo expedita tempora!
                                            Laboriosam!</p>
                                        <div>
                                            <button type="button" className="btn btn-outline-dark flex-grow-2" id="post">
                                                Post</button>
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

export default Politician;
