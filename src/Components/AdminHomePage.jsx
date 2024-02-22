import { Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import AdminNavBar from "./AdminNavBar";
import AdminView from "./AdminView";

const AdminHomePage = () => {
    return ( 
        <div>
            <AdminNavBar />
            <h1>Welcome To Admin Home Page</h1>
            <Routes>
                <Route path = '/AdminView'  element={<AdminView />}></Route>
                <Route path="/AddProduct" element = {<AddProduct />}></Route>
                
            </Routes>
           
        </div>
     );
}
 
export default AdminHomePage;