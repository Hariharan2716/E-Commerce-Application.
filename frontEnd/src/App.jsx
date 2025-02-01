/* eslint-disable no-unused-vars */

import * as reactRouterDom from 'react-router-dom';
import './App.css'
import React from 'react'
import Login from './Routes/Routes';

function App(){
  return(
    <reactRouterDom.BrowserRouter>
      <reactRouterDom.Routes>
        
        <reactRouterDom.Route path='/login' element = {<Login/>}/>
      
      </reactRouterDom.Routes>

    </reactRouterDom.BrowserRouter>
  )

}
export default App;
