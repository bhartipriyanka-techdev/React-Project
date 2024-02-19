import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Style/AdminLogin.css'; // Import CSS file


const AdminLogin = () => {
    // For Admin Name
    const [adminName, setAdminName] = useState("");
    // For Admin Password
    const [password, setPassword] = useState("");

    function login() {
        if (adminName === "piya" && password === "12345") {
            alert("Login Successful");
        } else {
            alert("Sorry, you are not registered. Please register yourself and then login.");
        }
    }

    return ( 
        <div className="AdminLogin">
            <h1>Admin Login</h1>
            <form>
                <label>
                    Name: 
                    <input 
                        type="text" 
                        value={adminName} 
                        onChange={(e) => setAdminName(e.target.value)} 
                        placeholder="Enter Name Here" 
                    />
                </label>
                <br />
                <label>
                    Password: 
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter Password Here" 
                    />
                </label>
                <br />
                <button type="button" onClick={login}>Login</button>
                <p> Are you New ?,Please <Link to ="/AdminSignUp">Register Your Self</Link></p>
            </form>
        </div>
    );
}
 
export default AdminLogin;
