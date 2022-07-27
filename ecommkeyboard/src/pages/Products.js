import React, { useState, useEffect } from 'react'
// import { useState } from 'react';
import '../index.css';
import Axios from 'axios';



export const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() =>{
    Axios.get(' https://server2001.herokuapp.com/products').then((response)=>{
      setData(response.data)
    })
  },[])
  // const filterResult=(catItem)=>{
  //   const result=ProductInfo.filter((currentData) => {
  //     return currentData.ProductInfo===catItem;
  //   });
    // setData(result); 

  
  return (

    <section id="hero">
        {/* <div className="logo">
        <img src="./img/computer.png" className="logo" alt = "" width=""/>
      </div> */}
      <div className="hero-box">
        <div className="hero-details">
          <h1 className="hero-heading">Products</h1>
        </div>
      </div>


      {/* <div className='container'>
        <div className='mt-5 mx-2'>
          <div className='col-md-3'>
            <button className='btn' onClick={()=> filterResult('cat1')}>cat1</button>
            <button className='btn' onClick={()=> filterResult('cat2')}>cat2t</button>
            <button className='btn' onClick={()=> filterResult('cat3')}>cat3</button>
            <button className='btn' onClick={()=> filterResult('cat4')}>cat4</button>
          </div>
        </div>

      </div> */}

      <div className='col-md-9'>
        <div className='row'>
          {data.map((values) => {
           
            return (

              <div>
                <div className='container1'>
                  <div className="card">
                    <img src={values.ImageURL} className="card-image-cap" width="" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">{values.ProductName}</h5>
                      <p>Price: {values.Price}</p>
                      <p className="card-text">{values.Descrip}</p>
                      <button className='btn'>buy </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </section>



  )
}
export default Products;
