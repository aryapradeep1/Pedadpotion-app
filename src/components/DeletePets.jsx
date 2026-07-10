import React from 'react'
import NaviBar from './NaviBar'

const DeletePets = () => {
  return (
    <div>

           <NaviBar/> 
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                          <center><u> <h2 style={{color:"#77DD77"}}>🐶🔍 𝓓𝓮𝓵𝓮𝓽𝓮 𝓟𝓮𝓽𝓼 🐱</h2></u></center>
                    <br></br>
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 xol-xxl-12">


                                 <label htmlFor="" className="form-label">Pet Id:</label>
                                 <input type="text" className="form-control" />
                                    
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 xol-xxl-12">

                                                <button className="btn btn-success">Delete</button>

                                </div>
                            </div>


                    </div>
                </div>
            </div>


    </div>
  )
}

export default DeletePets