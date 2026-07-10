import React, { useEffect, useState } from 'react'
import NaviBar from './NaviBar'
import axios from 'axios'

const ViewPets = () => {

    const[data,changeData]=useState([])
    const fetchData=() =>{
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/pet.json").then(
            (response)=>{
                changeData(response.data)
            }

        ).catch()
    }
    useEffect(
        ()=>{
            fetchData()
        }
    )
  return (
    <div>
        <NaviBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                           {data.map(
                            (value,index)=>{
                                     return(
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">


                                <div class="card" >
  <img src={value.image} class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <h5 class="card-title">{value.petName}</h5>
    <p class="card-text">{value.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{value.petId}</li>
    <li class="list-group-item">{value.species}</li>
    <li class="list-group-item">{value.breed}</li>
    <li class="list-group-item">{value.age}</li>
    <li class="list-group-item">{value.gender}</li>
    <li class="list-group-item">{value.vaccinated}</li>
    <li class="list-group-item">{value.adoptionFee}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
                            </div>
                                     )
                            }
                           )}
                        </div>
                    </div>
                </div>
            </div>


    </div>
  )
}

export default ViewPets