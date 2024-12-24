import SighUp from "./sighup/sighUp"
import Login from "./sighup/login";
import {Routes, Route} from 'react-router-dom'
import Home from "./mainHome/home/home";

import MainHome from "./mainHome/mainHome";




const App = ()=>(


  <Routes>

<Route path="/" element = {<SighUp/>}></Route>
<Route path="/login" element = {<Login/>}></Route>
<Route path="/mainHome" element = {<MainHome/>}></Route>

<Route path="/home" element={<Home/>}></Route>




  </Routes>
)




export default App;