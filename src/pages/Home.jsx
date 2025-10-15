import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/productSlice';
import Pagination from '../components/Pagination';



function Home() {

    const {allProducts,loading,error}=useSelector(state=>state.productReducer)

    const [currentPage,setCurrentPage]=useState(1)
    const [cardperPage,setCardperPage]=useState(6)
    
    const dispatch=useDispatch()
    useEffect(() => {

        dispatch(fetchProducts())
      
    }, [])

    let endingIndex=currentPage*cardperPage
    let startingIndex=endingIndex-cardperPage
    let currentPost=allProducts.slice(startingIndex,endingIndex)
    
    
    return (
        <>
            <Header insideHome={true}/>


            <div className='container-fluid ' style={{ marginTop: "150px" }}>

                {
                    loading ?

                    <div> <Spinner animation='border' style={{width:"100px", height:"100px"}}/> </div>
                    :
                
                <Row className='mt-5 justify-content-center'>
                    {

                        currentPost?.length>0 ?
                        currentPost?.map(product=>(

                            <Col xl={3} lg={4} md={6} xs={12} className='mb-2 me-2'>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.thumbnail} height={'250px'} />
                            <Card.Body className='text-center'>
                                <Card.Title>{product.title.slice(0,15)}...</Card.Title>
                                <div className='text-center'>
                                    <Link to={`/${product?.id}/view`} className='text-danger text-decoration-none fw-bold'>{product.details}<button className='btn btn-rounded' style={{backgroundColor:'#7DDA58'}}>View More..</button></Link>

                                </div>
                               </Card.Body>
                        </Card>

                    </Col>

                        ))
                        :
                        <div>nothing</div>

                    
                    }
                </Row>
                    }

                    {
                        currentPost?.length>0 &&
                        <Pagination totalProducts={allProducts.length} cardPerPage={cardperPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                    }

            </div>



        </>
    )
}

export default Home