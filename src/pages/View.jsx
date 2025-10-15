import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addtowishlist } from '../Redux/wishlistSlice'
import { useParams } from 'react-router-dom'
import { addCartItem } from '../Redux/cartSlice'


function View() {

  const [products,setProducts]=useState({})

const {id}=useParams()
console.log(id);

const dispatch=useDispatch()

const userwishlist=useSelector(state=>state.wishlistReducer)
const userCart=useSelector(state=>state.cartReducer)
console.log(userwishlist);
console.log(userCart);




  useEffect(() => {
    if(localStorage.getItem("products")){
      const allproducts1=JSON.parse(localStorage.getItem("products"))
      console.log(allproducts1);
      setProducts(allproducts1.filter(item=>item.id==id)[0]
    )}
      
  }, [])


  const handleWishList=()=>{
    if(userwishlist?.includes(products)){

      alert( `${products.title} already in your wishlist`)
    }
    else{
       dispatch(addtowishlist(products))   
    }
  }

  const handleCart=()=>{
    const existingProduct=userCart.find(item=>item.id==products.id)

    if(existingProduct){
      alert("product quantity incremented")
      dispatch(addCartItem(products))
    }
    else{
      dispatch(addCartItem(products))
    }
  }

  return (
    <>
      <Header />

      <div className="row mt-5 p-5 align-items-center" style={{ marginTop: "110px" }}>
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <img src={products?.thumbnail} alt="" height={'350px'} />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">

          <h4 className='text-secondary'>Product ID:{products?.id}</h4>
          <h2>{products?.title}</h2>
          <h3 className='text-danger'>${products?.price}</h3>
          <p style={{textAlign:'justify'}}>{products?.description}</p>

          <div className="d-flex">

            <button onClick={handleWishList} className='btn btn-outlined'><i class="fa-solid fa-heart-circle-plus text-danger"></i></button>
            <button onClick={handleCart} className='btn btn-outlined'><i class="fa-solid fa-cart-plus text-success"></i></button>

          </div>

        </div>

      </div>

    </>
  )
}

export default View