import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Style/AdminLogin.css';
 
const AdminLogin = () => {
   let [uname,setuname]=useState("");
   console.log(uname);
   let[password,setpassword]=useState("");
   console.log(password);
   let[admin,setadmin]=useState([]);
   let navigate=useNavigate();

   useEffect(()=>{
      axios.get('http://localhost:9000/Manager')
      .then((res)=>{
         console.log(res.data)
         setadmin(res.data);
      })
      .catch((err)=>{
         console.log(err);
      })
   },[])
  

   function login(e){
      let a=false;
      e.preventDefault();
      admin.map((x)=>{
         if(uname==x.email&&password==x.password){
            alert("Login Successful");
            navigate('/AdminHomePage')
            //navigate is used to navigate to the other page
            a=true;
         }
      })
      if(a==false){
         alert("Login Failed")
      }  
   }

    return ( 
        <div className="AdminLogin">
           <h1>Admin Login</h1>
           <form>
            <label>
               UserName:<input type="text" value={uname} onChange={(e)=> { setuname(e.target.value)}} placeholder="Enter the Username" />
            </label>
            <br />
            <label>
              Password:<input type="password" value={password} onChange={(e)=> { setpassword(e.target.value)}} placeholder="Enter the Password" />

            </label>
            <br />
            <button onClick={login}Login>Login</button>
            <p>Are you new to the page ?<Link to="/AdminSignUp">SignUp Now</Link></p>

           </form>
        </div>
     );
}
 
export default AdminLogin;