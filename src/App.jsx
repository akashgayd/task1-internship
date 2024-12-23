import SighUp from "./sighup/sighUp"
import Login from "./sighup/login";
import {Routes, Route} from 'react-router-dom'
import Home from "./home/home";




const App = ()=>(


  <Routes>

<Route path="/sighup" element = {<SighUp/>}></Route>
<Route path="/login" element = {<Login/>}></Route>
<Route path="/" element = {<Home/>}></Route>




  </Routes>
)




export default App;