import {BrowserRouter,Routes,Route}from "react-router-dom"
import Login from './Login.jsx';
import Browse from './Browse.jsx';

const BodySection = () => {

return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/browse" element={<Browse/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default BodySection;