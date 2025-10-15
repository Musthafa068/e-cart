import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartitem } from '../Redux/cartSlice'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {

  const navigate=useNavigate()

  const userCart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()

  const [totalCartItem,setTotalCartItem]=useState(0)
  const [totalCartAmount,setTotalCartAmount]=useState(0)
  useEffect(()=>{

    if(userCart?.length>0){
      setTotalCartItem(userCart.length)
      setTotalCartAmount(userCart.map(pro=>pro.totalPrice).reduce((t1,t2)=>t1+t2))
    }
  },[userCart])

  const handleDecrementQuantity=(product)=>{
    if(product.quantity>1){
      dispatch(decQuantity(product.id))
    }
    else{
      dispatch(removeCartitem(product.id))
    }
  }

  const checkOut=()=>{

    dispatch(emptyCart())
    alert("Your order place successfully.Thank you for purchasing with us!!")
    navigate('/')
  }

  return (
    <>
      <Header/>
      <div className="container" style={{marginTop:"70px"}}>
          <h3 className='text-danger text-center'>Cart Summary</h3>

          {
            userCart?.length>0 ?
            

          <div className="row">
            <div className="col-lg-8">
              <table className='table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>

                <tbody>

                  {
                    userCart?.map(product=>(
                      
                  <tr>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td><img src={product.thumbnail} alt="" height={'50px'} width={'50px'} /></td>
                    <td>
                      <button onClick={()=>handleDecrementQuantity(product)} style={{height:''}} className='btn fw-bold'>-</button>
                      <input className='border border-white' type="text" readOnly style={{width:'30px'}} value={product.quantity}/>
                      <button onClick={()=>dispatch(incQuantity(product.id))} className='btn fw-bold'>+</button>
                    </td>
                    <td>{product.totalPrice}</td>
                    <td><button onClick={()=>dispatch(removeCartitem(product.id))} style={{border:"none"}}><i class="fa-solid fa-trash text-danger"></i></button></td>
                  </tr>
                    ))
                  }
                </tbody>
              </table>
              <div className="">
                <button onClick={()=>dispatch(emptyCart())} style={{marginLeft:'450px'}} className='btn btn-danger ms-3 '>Empty Cart</button>
                <Link to={'/'} style={{marginLeft:'450px'}} className='btn btn-primary ms-3 '>Shop More </Link>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="shadow p-3">
                <h5>Total Items: <span className='text-danger me-3'>{totalCartItem}</span></h5>
                <h5>Total Amount: <span className='text-danger me-3'>${totalCartAmount}</span></h5>
                <button onClick={()=>checkOut()} className='btn btn-warning w-100'>Checkout</button>

              </div>
            </div>
          </div>
          :
          <div className="d-flex align-items-center justify-content-center flex-colum"><img style={{height:'600px',width:'800px'}} src="https://th.bing.com/th/id/OIP.NLALs6-LwPyoCSIv4UWwvgHaE8?cb=iwp2&rs=1&pid=ImgDetMain" alt="" /></div>
            }
      </div>
    </>
  )
}

export default Cart