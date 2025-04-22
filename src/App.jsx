 import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Veg from './Veg';
import NonVeg from './NonVeg';
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import Order from './Order';
import NotFound from './NotFound';
import Home from './Home';
import Login from './Login';
import { logout } from './Store';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App()
{
  let carts=useSelector(state=>state.cart);
  let dispatch=useDispatch();

  let isAuthenticated=useSelector(state=>state.auth.isAuthenticated);
  let username=useSelector(state=>state.auth.user);


  let totalQuantity=carts.reduce((sum,item)=>sum+item.quantity,0);

  return(
    <>
    <BrowserRouter>
    {/* <nav>
      <h1 style={{color:'orange',fontStyle:'italic',width:'100px'}}>FoodLake</h1>
    <Link to={'/home'} ><i class="fa-solid fa-house"></i> Home</Link>
    <Link to={'/veg'} ><i class="fa-solid fa-carrot"></i> Veg</Link>
    <Link to={'/nonVeg'} ><i class="fa-solid fa-drumstick-bite"></i> NonVeg</Link>
    <Link to={'/cart'} ><i class="fa-solid fa-cart-shopping"></i> Cart:{totalQuantity}</Link>
    <Link to={'/order'}>Order</Link>
    
    {
      isAuthenticated?
      <>
      <h5 style={{color:"orange", marginRight:"5px" }}>Welcome {username} !</h5>
      <button onClick={()=>dispatch(logout())} style={{width:'100px'}}>Logout</button>
      </>
      :
      <>
      <Link to={'/login'}>Login</Link>
      </>
    }
    

    </nav>
     */}

      
<nav className="navbar navbar-expand-lg navbar-light fixed-top px-4" style={{ backgroundColor: 'brown' }}>
  <h1 className="navbar-brand mb-0" style={{ color: 'orange', fontStyle: 'italic', fontSize: 40 }}>
    FoodLake
  </h1>

  <div className="collapse navbar-collapse">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" style={{ color: 'white', fontSize:18}} to="/home">
          <i className="fa-solid fa-house"></i> Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={{ color: 'white', fontSize:18 }} to="/veg">
          <i className="fa-solid fa-carrot"></i> Veg
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={{ color: 'white', fontSize:18 }} to="/nonVeg">
          <i className="fa-solid fa-drumstick-bite"></i> NonVeg
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={{ color: 'white', fontSize:18 }} to="/cart">
          <i className="fa-solid fa-cart-shopping"></i> Cart: {totalQuantity}
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={{ color: 'white', fontSize:18 }} to="/order">Order</Link>
      </li>
    </ul>

    <div className="d-flex align-items-center">
      {isAuthenticated ? (
        <>
          <h5 className="text-orange me-3 mb-0" style={{ color: 'orange' }}>
            Welcome {username}!
          </h5>
          <button className="btn btn-outline-danger" onClick={() => dispatch(logout())}>
            Logout
          </button>
        </>
      ) : (
        <Link className="btn btn-outline-primary" to="/login">Login</Link>
      )}
    </div>
  </div>
</nav>

    
    <Routes>
      <Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
      <Route path='/veg' element={<Veg/>} />
      <Route path='/nonVeg' element={<NonVeg/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/login' element={<Login/>}/>
      
      <Route path='*' element={<NotFound/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;