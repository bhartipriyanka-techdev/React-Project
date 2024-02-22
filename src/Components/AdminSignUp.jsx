import axios from 'axios';
import { useState } from 'react';
import '../Style/AdminSignUpCss.css';

const AdminSignUp = () => {
    const [name, setName] = useState(""); // for Name
    const [email, setEmail] = useState(""); // For Email
    const [phone, setPhone] = useState(""); // For Phone No.
    const [profile, setProfile] = useState(""); // For Profile
    const [password, setPassword] = useState(""); // For Password
    const [cPassword, setCPassword] = useState(""); // For Confirm Password

    // Creating Method
    const addAdmin = (e) => {
        e.preventDefault(); // Prevent refreshing
        const admins = { name, email, phone, profile, password, cPassword };

        axios.post("http://localhost:9000/Manager",admins)

        
        /* {
            method: "POST",
            headers: { "Content-Type": "application/json" }, // for json format
            body: JSON.stringify(admins) // For String
        })*/

        .then((res) => {
            console.log(res);
            alert("Admin Added Successfully..!!");
        })
        .catch((err) => {
            alert("Invalid Data...!");
        });
    };

    return (
        <div className="AdminSignUp">
            <h2><u>Admin Registration Form</u></h2>
            <form onSubmit={addAdmin}>
                <label>
                    Name: 
                    <input required type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name Here" />
                </label><br />
                <label>
                    Email: 
                    <input required type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email Here" />
                </label><br />
                <label>
                    Phone No.: 
                    <input required type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        pattern="[0-9]{10}" 
                        placeholder="Enter Phone No. Here" />
                </label><br />
                <label>
                    Profile Image: 
                    <input type="text" 
                        value={profile}
                        onChange={(e) => setProfile(e.target.value)}
                        placeholder="Upload Image Here" />
                </label><br />
                <label>
                    Password: 
                    <input required type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password Here" />
                </label><br />
                <label>
                    Confirm Password: 
                    <input required type="password" 
                        value={cPassword}
                        onChange={(e) => setCPassword(e.target.value)}
                        placeholder="Confirm Your Password Here" />
                </label><br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
 
export default AdminSignUp;
