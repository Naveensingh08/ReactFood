/* import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './Store';


function Login() {

    const username=useRef();
    const password=useRef();

    let dispatch=useDispatch();
    let navigate=useNavigate();
     let checkLogin=()=>{
        
        if(username.current.value==='Naveen' && password.current.value==='Naveen@123')
        {
            dispatch(login(username.current.value))

            navigate('/home')
        }
        else{
            alert('Invalid login data Check Once');
        }
     }
  return (
    <>
  <div className='formBody'>
  <input type='text' ref={username} placeholder='Enter User Name' />
  <br/><br/>
  <input type='password' ref={password} placeholder='Enter Password'/>
  <br/><br/>
  <button onClick={checkLogin}>Login</button>
  </div>
  
      
    </>
  )
}

export default Login; */


// import React, { useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login } from './Store';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Login() {
//   const username = useRef();
//   const password = useRef();

//   let dispatch = useDispatch();
//   let navigate = useNavigate();

//   let checkLogin = () => {
//     if (username.current.value === 'Naveen' && password.current.value === 'Naveen@123') {
//       dispatch(login(username.current.value));
//       navigate('/home');
//     } else {
//       alert('Invalid login data. Please check again.');
//     }
//   }

//   return (
//     <>
//       <div className="container-fluid bg-secondary d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
//         <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
//           <h3 className="text-center mb-4">Login</h3>
//           <div className="mb-3">
//             <input
//               type="text"
//               ref={username}
//               className="form-control"
//               placeholder="Enter User Name"
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="password"
//               ref={password}
//               className="form-control"
//               placeholder="Enter Password"
//             />
//           </div>
//           <div className="d-flex justify-content-center">
//             <button className="btn btn-primary" onClick={checkLogin}>Login</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './Store';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const username = useRef();
  const password = useRef();

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let checkLogin = () => {
    if (username.current.value === 'Naveen' && password.current.value === 'Naveen@123') {
      dispatch(login(username.current.value));
      navigate('/home');
    } else {
      alert('Invalid login data. Please check again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="text-center mb-4">Login</h3>
              <div className="mb-3">
                <input
                  type="text"
                  ref={username}
                  className="form-control"
                  placeholder="Enter User Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  ref={password}
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <div className="text-center">
                <button onClick={checkLogin} className="btn btn-primary w-100">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
