import React from 'react'
import Header from '../components/Header'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addtowishlist, removewishlist } from '../Redux/wishlistSlice'
import { addCartItem } from '../Redux/cartSlice'



 function Wishlist() {


  const userWishlist=useSelector(state=>state.wishlistReducer)
  const userCart=useSelector(state=>state.cartReducer)
  console.log(userWishlist);

  const dispatch=useDispatch()

  const handleCart=(products)=>{

    const existingProduct=userCart.find(item=>item.id==products.id)

    if(existingProduct){
      alert("product quantity incremented")
      dispatch(addCartItem(products))
      dispatch(removewishlist(products.id))
    }
    else{
      dispatch(addCartItem(products))
      dispatch(removewishlist(products.id))
    }

  }
  

  return (
    <>
        <Header/>

      <Container>
       
        
         <div className='container-fluid'>

              <h3 className='text-danger text-center fw-bold mt-4'>Your Wishlist</h3>

                <Row className='mt-5'>
                {
          userWishlist?.length>0 ?
          userWishlist?.map(item=>(

                    <Col xl={3} lg={4} md={6} xs={12} className='mb-2 me-2'>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item?.thumbnail} height={'250px'} />
                            <Card.Body className='text-center'>
                                <Card.Title>{item?.title}</Card.Title>
                                <div className='d-flex justify-content-around'>

                                  <button onClick={()=>dispatch(removewishlist(item.id))} className='btn btn-outlined'><i class="fa-solid fa-heart-circle-plus text-danger"></i></button>
                                  <button onClick={()=>handleCart(item)} className='btn btn-outlined'><i class="fa-solid fa-cart-shopping text-success"></i></button>

                                </div>
                               </Card.Body>
                        </Card>

                    </Col>
                  ))
                  :
                  <div className="d-flex align-items-center justify-content-center flex-colum"><img src="https://th.bing.com/th/id/OIP.gn99fIyj918A9IUVwOiCagAAAA?rs=1&pid=ImgDetMain" alt="" /></div>
                }
                </Row>

            </div>
            
         
        </Container>
    </>
  )
}

export default Wishlist      