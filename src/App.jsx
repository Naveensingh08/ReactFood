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
    <nav>
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