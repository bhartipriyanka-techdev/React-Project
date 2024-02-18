import React from "react";
import { Link } from "react-router-dom";
import '../Style/LandingPageeCss.css'; // Import CSS file

const LandingPage = () => {
   return (
      <div className="LandingPage">
         
         <div className="login">
            <Link to="/Admin">
               <img id="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyO_6PJ3IpaipzPffIdwFKU2Cj9C6Z8rsJA&usqp=CAU" alt="Admin Image" />
               <h3>Admin</h3>
            </Link>
            <Link to="/User">
               <img id="img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8vuukp-ISJyZb1YjZVimHrZt-2wqaAv5PiA&usqp=CAU" alt="User Image" />
               <h3>User</h3>
            </Link>
         </div>
      </div>
   );
}

export default LandingPage;
