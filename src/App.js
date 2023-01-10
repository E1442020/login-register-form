import { Route, Routes } from "react-router-dom";
import HelloPage from "./component/HelloPage/HelloPage";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";


function App() {
  return (
  <>

<Routes>
        <Route path="/" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="helloPage" element={<HelloPage/>} />
      </Routes>
  
  </>
  );
}

export default App;
