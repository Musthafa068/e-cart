import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Col, Row, Spinner, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/productSlice';
import Pagination from '../components/Pagination';

function Home() {
    const {allProducts, loading, error} = useSelector(state => state.productReducer)
    const [currentPage, setCurrentPage] = useState(1)
    const [cardperPage, setCardperPage] = useState(6)
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    let endingIndex = currentPage * cardperPage
    let startingIndex = endingIndex - cardperPage
    let currentPost = allProducts.slice(startingIndex, endingIndex)
    
    return (
        <>
            <Header insideHome={true}/>

            <div style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                minHeight: '300px',
                marginTop: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                padding: '60px 20px'
            }}>
                <div>
                    <h1 className='display-3 fw-bold mb-3' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                        Welcome to Our Store
                    </h1>
                    <p className='lead fs-4'>Discover amazing products at great prices</p>
                    <Badge bg="light" text="dark" className='px-4 py-2 fs-6 mt-2'>
                        {allProducts.length}+ Products Available
                    </Badge>
                </div>
            </div>

            <Container fluid className='px-4' style={{ marginTop: '50px', marginBottom: '50px' }}>
                {loading ? (
                    <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '400px' }}>
                        <div className='text-center'>
                            <Spinner 
                                animation='border' 
                                style={{ width: "80px", height: "80px", color: '#667eea' }}
                            />
                            <p className='mt-3 text-muted fs-5'>Loading amazing products...</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <Row className='g-4 justify-content-center'>
                            {currentPost?.length > 0 ? (
                                currentPost?.map(product => (
                                    <Col xl={3} lg={4} md={6} sm={12} key={product.id}>
                                        <Card 
                                            className='h-100 shadow-sm border-0'
                                            style={{ 
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer',
                                                overflow: 'hidden'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-10px)';
                                                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                                            }}
                                        >
                                            <div style={{ 
                                                position: 'relative', 
                                                overflow: 'hidden',
                                                backgroundColor: '#f8f9fa'
                                            }}>
                                                <Card.Img 
                                                    variant="top" 
                                                    src={product.thumbnail} 
                                                    style={{ 
                                                        height: '250px',
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                                />
                                                <Badge 
                                                    bg="success" 
                                                    style={{ 
                                                        position: 'absolute', 
                                                        top: '15px', 
                                                        right: '15px',
                                                        padding: '8px 12px',
                                                        fontSize: '0.85rem'
                                                    }}
                                                >
                                                    New
                                                </Badge>
                                            </div>
                                            
                                            <Card.Body className='d-flex flex-column'>
                                                <Card.Title 
                                                    className='mb-3' 
                                                    style={{ 
                                                        fontSize: '1.1rem',
                                                        fontWeight: '600',
                                                        color: '#2d3748',
                                                        minHeight: '50px'
                                                    }}
                                                >
                                                    {product.title.slice(0, 50)}
                                                    {product.title.length > 50 ? '...' : ''}
                                                </Card.Title>
                                                
                                                <div className='mt-auto text-center'>
                                                    <Link 
                                                        to={`/${product?.id}/view`} 
                                                        className='text-decoration-none'
                                                        style={{ width: '100%' }}
                                                    >
                                                        <button 
                                                            className='btn w-100 py-2 fw-semibold'
                                                            style={{
                                                                backgroundColor: '#7DDA58',
                                                                color: 'white',
                                                                border: 'none',
                                                                borderRadius: '8px',
                                                                transition: 'all 0.3s ease',
                                                                fontSize: '0.95rem'
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.currentTarget.style.backgroundColor = '#6bc247';
                                                                e.currentTarget.style.transform = 'scale(1.02)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.currentTarget.style.backgroundColor = '#7DDA58';
                                                                e.currentTarget.style.transform = 'scale(1)';
                                                            }}
                                                        >
                                                            View Details →
                                                        </button>
                                                    </Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            ) : (
                                <Col xs={12}>
                                    <div 
                                        className='text-center py-5'
                                        style={{
                                            backgroundColor: '#f8f9fa',
                                            borderRadius: '12px',
                                            minHeight: '300px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🛍️</div>
                                        <h3 className='text-muted'>No Products Found</h3>
                                        <p className='text-muted'>Check back later for new items!</p>
                                    </div>
                                </Col>
                            )}
                        </Row>

                        {currentPost?.length > 0 && (
                            <div className='mt-5'>
                                <Pagination 
                                    totalProducts={allProducts.length} 
                                    cardPerPage={cardperPage} 
                                    setCurrentPage={setCurrentPage} 
                                    currentPage={currentPage}
                                />
                            </div>
                        )}
                    </>
                )}
            </Container>
        </>
    )
}

export default Home
