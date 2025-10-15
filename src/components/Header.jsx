import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { searchProducts } from '../Redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';


function Header({ insideHome }) {

  const wishlist = useSelector((state => state.wishlistReducer))
  const userCart = useSelector((state) => state.cartReducer)


  const dispatch = useDispatch()

  return (
    <Navbar expand="lg" className=" w-100 " style={{ background: "linear-gradient(to right,#48A125, #7DDA58  )", color: "white"}}>

      <Container>
        <Navbar.Brand ><Link className='fw-bold text-white text-decoration-none fs-3' to="/"><img className='w-25' src="https://cdn.estore5s.com/asset/estore-logo-transparent.png" alt="" /></Link>
          <div className=" fw-light " style={{ fontSize: "12px", marginLeft: '-15px', color: "black" }} >
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto ">

            {insideHome &&
              <Nav.Link >
                <input onChange={e => { dispatch(searchProducts(e.target.value.toLowerCase())) }} style={{ width: '400px', }} className=' rounded p-1 border border-white' type="text" placeholder='pick your favourites' />
              </Nav.Link>
            }

            <Nav.Link ><Link to={'/wishlist'}><i class="fa-solid fa-heart-circle-plus text-danger"></i><box-icon name='heart-circle'></box-icon><Badge bg='secondary'>{wishlist?.length}</Badge></Link></Nav.Link>
            <Nav.Link ><Link to={'/cart'}><i class="fa-solid fa-cart-shopping text-success"></i><box-icon type='solid' name='cart-alt'></box-icon><Badge bg='secondary'>{userCart?.length}</Badge></Link></Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;

