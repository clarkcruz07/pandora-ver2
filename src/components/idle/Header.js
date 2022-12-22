import React from 'react'

export const Header = () =>{

    return (
        <div className="row">
            <div className="panel panel-default mt-5 bg-white w-75 mx-auto rounded-big">
                <div className="panel-body p-3">
                    <div className="text-dark">
                        <h4>Available Doors</h4>
                    </div>
                    <div className="d-flex justify-content-around align-items-center">
                        <div>
                            <h1 className="base-color">1</h1>
                            <p className="text-dark base-text">small</p>
                        </div>
                        <div>
                            <h1 className="base-color">1</h1>
                            <p className="text-dark base-text">medium</p>
                        </div>
                        <div>
                            <h1 className="base-color">1</h1>
                            <p className="text-dark base-text">large</p>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Header