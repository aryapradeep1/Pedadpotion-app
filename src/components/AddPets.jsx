import React from 'react'
import NaviBar from './NaviBar'

const AddPets = () => {
  return (
    <div>
        <NaviBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                              <label htmlFor="" className="form-label">Pet ID</label>
                              <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                     <label htmlFor="" className="form-label">Pet name</label>
                              <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                             <label htmlFor="" className="form-label">Spcies</label>
                              <input type="text" className="form-control" />



                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                 <label htmlFor="" className="form-label">Breed</label>
                              <input type="text" className="form-control" />




                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                     <label htmlFor="" className="form-label">Age</label>
                              <input type="text" className="form-control" />




                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                 <label htmlFor="" className="form-label">Gender</label>
                             male<input type="radio" name="gender" id="" />
                              Female<input type="radio" name="gender" id="" />





                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Vaccinated</label>
                             Yes<input type="radio" name="vacc" id="" />
                              No<input type="radio" name="vacc" id="" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                              <label htmlFor="" className="form-label">Adoption Fee:</label>
                              <input type="text" className="form-control" />





                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                              <label htmlFor="" className="form-label">Image url:</label>
                              <input type="text" className="form-control" />



                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <textarea name="" id="" className="form-control" placeholder='description'></textarea>


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success">Add Pet</button>


                        </div>
                    </div>


                </div>
            </div>
        </div>

    </div>
  )
}

export default AddPets