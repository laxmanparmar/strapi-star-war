import {
    Routes,
    Route
  } from "react-router-dom";
  
  import Planets from "./pages/Planets";
  import Characters from "./pages/Characters";

  const RoutesPath = () => {
    return (
          <Routes>
            <Route path="/planets" element = { <Planets />}/>
            <Route path="/characters" element = { <Characters /> }/>
            <Route path="/" element = { <Planets />}/>
          </Routes>
    );
  }
  export default RoutesPath;
