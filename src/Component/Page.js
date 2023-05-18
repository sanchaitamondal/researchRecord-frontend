
import React from "react";
import './Page.css';

function Page() {
    return (
        <>
            <div className="container-fluid p-4">
                <h1 className="text-center">Research Record Store in Blockchain</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 ">
                        <h2 className="text-center border p-3 pageTop ">Upload File</h2>
                        <form>
                            <label htmlFor="username">User Name</label>
                            <input type="text" htmlFor="username" />
                            <br />
                            <div className="form-group">
                                <input
                                    type="file"
                                    className="form-control-file border"
                                    name="file"
                                />
                            </div>
                            <button type="submit" className="btn border border-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="col-lg-7 ">
                        <h2 className="text-center border p-3 pageTop">View Uploaded File</h2>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Page;
