import React from 'react';

export default function Profile() {
  return (
<div className="container" id="marginTop">
    <div className="row justify-content-center" id="team-cards">
        <div className="col-12 ">
            <div className="card-header">;


                <img src="..." className="card-img" alt="..."/>

                    <div classname="card">
                        <h3>username <span className="material-symbols-outlined">
                            person</span>
                        </h3>
                    </div>
                    <div className="card-body">
                        <p className="id">Following: 127 </p>
                        <p className="email">Likes<span className="material-symbols-outlined">
                            favorite
                        </span>
                        </p>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-light me-1 flex-grow-1">Chat</button>
                        <button type="button" className="btn btn-outline-light me-1 flex-grow-1">Follow</button>
                    </div>
            </div>
        </div>
    </div>
</div>
 );
} 