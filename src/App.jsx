import React, { useState } from 'react'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLoginSuccess = () => {
      setIsLoggedIn(true);
    };
  
    return (
      <>
        {!isLoggedIn ? (
          <Login onLoginSuccess={handleLoginSuccess} />
        ) : (
          <Home />
        )}
      </>
    );
  };
  
  export default App;