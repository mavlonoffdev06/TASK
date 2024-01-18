import React from 'react'
import '../main/Main.css'
import Container from '@mui/material/Container';
import Products from '../products/Products';

const Main = () => {
   

    
  return (
    <div className="main">
    <Container>
       <h1 className='main__title'>You’ve got <span> 7 book </span> </h1> 
       <Products></Products>
    </Container>
    </div>
  )
}

export default Main