import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import RideForm from './components/RideForm';
import Test from './components/Test';
import {
  Routes,
  Route,BrowserRouter
} from "react-router-dom";
function App() {
  return ( 

      <BrowserRouter>
<Routes>
               

               
    <Route  path="/" element={<SignUp />} />
    <Route  path="/login" element={<SignIn />} />
    <Route  path="/Ride" element={<RideForm />} />
    <Route  path="/test" element={<Test />} />

    
            </Routes>
            </BrowserRouter>

 
  

  );
}

export default App;
