import React from 'react'
import notfound from '../../images/404.png'
import '../pageNotFound/PageNotFound.css'
import { NavLink } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const PageNotFound = () => {
  return (
    <div className='page'>
        <img src={notfound} alt="pagenotfound" />
        
        <Stack spacing={2} direction="row" mt={5}>
        <NavLink to='/'>
        <Button variant="contained">Go Home Page</Button>
        </NavLink>
        <NavLink to='/'>
      <Button variant="outlined">Reload Page</Button>
      </NavLink>
    </Stack>
    </div>
  )
}

export default PageNotFound