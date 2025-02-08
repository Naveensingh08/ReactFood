/* import React from 'react'

function Home() {
  return (
    <>
     <h1>WelCome To Our Hotel </h1>
    </>
  )
}

export default Home;
*/

import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';


function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 text-primary">Welcome to Our Food Zone</h1>
      <p className="lead">Indulge in delicious meals and exciting flavors!</p>
    </div>
  );
}

export default Home;
