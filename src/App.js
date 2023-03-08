import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
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
    <Route  path="/rides" element={<Test />} />

    
            </Routes>
            </BrowserRouter>

 
  

  );
}

export default App;
