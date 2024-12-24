
import { useNavigate } from "react-router-dom";
import './mainHome.css';


const MainHome =()=>{

    const navigate = useNavigate();

    function navigater(){

       navigate("/home")
    }

    return(
        <>
        
        <div className="main-home-cont">


<div className="todo-discription">

<h1>Write Your today task now!!</h1>

<button onClick={navigater}> Today Goal</button>


<div className="your-goals">
<p><span><i class="fa-solid fa-check "></i> </span> Bring to the table win-win survival</p>
<p><span><i class="fa-solid fa-check "></i> </span> Capitalize on low hanging fruit to identify</p>
<p><span><i class="fa-solid fa-check "></i> </span> But I must explain to you how all this</p>

</div>



</div>

<div className="daily-routine">

    <img src="https://thumbs.dreamstime.com/z/man-routine-man-routine-everyday-schedule-illustration-110873558.jpg"/>
</div>




        </div>
        
        </>
    )


    




}

export default MainHome;