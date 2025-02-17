import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


import { AppRoute } from '../../App'

export default function Products() {

  const [Product, setProduct] = useState([])

  useEffect(() => {
    axios.get(`${AppRoute}api/get-all-product`)
      .then((res) => setProduct(res.data.Products))
      .catch((error) => { console.log(error.message) })
  }, [])

  return (
    <>
      <div style={{ backgroundColor: "#f9e0b7" }}>

      <h2 className='text-center pt-3'>Products </h2>
      <hr />
      <div className="container my-2">

      <div className="row container">

    
{Product.map((value, index) => (
   <div className="col-lg-3 col-md-4 col-sm-6 my-3" key={index}>
     <Link className='text-decoration-none text-dark' to={`/get-product-by-id/${value._id}`} >
       <Card style={{ height: "360px" }}>
         <Card.Img varient="top" src={value.ProductThumbnail} className='object-fit-contain border rounded img-fluid' style={{ height: "200px" }} />
         <Card.Body>
           <div className="brand text-center">
           </div>
<div className="text-center">
             {value.ProductName.length > 20 ? value.ProductName.slice(0, 20) + '...' : value.ProductName}
           </div>
           <div className="brand text-center">
             <span>Brand:  </span>
             <span className="fw-semibold">{value.ProductBrand.length > 15 ? value.ProductBrand.slice(0, 15) + '...' : value.ProductBrand}</span>
           </div>




           

           <div className='text-center' >
             <h5 className='text-danger fw-semibold  me-2 text-secondary'>Rs. {value.ProductPrice}</h5>

           </div>


         </Card.Body>


         <span className="position-absolute translate-start badge bg-danger" style={{
           padding: '5px 10px',
           marginTop: '10px',
           marginLeft: '-4px',
           borderRadius: '4px'
         }}>
           {value.ProductCategory.toUpperCase()}
         </span>


       </Card>
     </Link>

    



     
   </div>
 ))}
 </div>
       

      </div>
      </div>




    </>
  )
}
