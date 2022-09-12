import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import UserData from './components/pages/UserData';
import ChefDetails from './components/pages/ChefDetails';
import Staff from './components/pages/Staff';
import Testimonials from './components/pages/Testimonials';
import Navtag from './components/layout/Navtag';
import Login from './components/pages/Login';



const App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <Navtag>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/userdata" element={<UserData />} />
            <Route path="/userdata" element={<UserData />} />
            <Route path="/chefdetails" element={<ChefDetails />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </Navtag>
      </BrowserRouter>

      {/* <ChefDetails />
       <UserData />
       <Staff />
       <Testimonials />
       <Mainpage /> */}

    </div>

  )
}

export default App