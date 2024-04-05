import { Link } from "react-router-dom";
import '../Style/AdminNavBarCss.css';
const AdminNavBar = () => {
    return ( 
        <div className="AdminNavBar">
            
            <div className="logo">
                <h1>Mobile<span>Shop</span></h1>

            </div>
            <div className="options">
               <Link to ="/adminHomePage/adminView">View</Link>
               <Link to ="/adminHomePage/addProduct">Add Product</Link>
              

                
            </div>
        </div>
     );
}
 
export default AdminNavBar;