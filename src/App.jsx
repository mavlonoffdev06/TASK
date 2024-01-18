import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './routes/login/Login';
// import Create from './routes/create/Create';
import PageNotFound from './routes/pageNotFound/PageNotFound';
import Update from './routes/update/Update';

const App = () => {

  return (


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/update/:id' element={<Update></Update>} ></Route>
        {/* <Route path='/create/' element={<Create></Create>} ></Route> */}
        <Route path='*' element={<PageNotFound></PageNotFound>} ></Route>
        <Route path='/login/' element={<Login></Login>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App