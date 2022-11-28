
import React from "react";
import function searchPage() {
    return (
        <div className="container">

            <div className="row mb-5">

                <div className="col-lg-8 mx-auto">

                    <form action="">
                        <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">

                            <div className="input-group">

                                <input type="search" placeholder="search here" className="form-control border-0 bg-light"> </input>

                                <div className="input-group-append">

                                    <button id="button-addon1" type="submit" className="btn btn-link text-primary"> <i

                                        className="fa fa-search"> </i> </button>

                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div >
        </div >
    )
};
export default searchPage;