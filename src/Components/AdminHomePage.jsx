import { Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import AdminNavBar from "./AdminNavBar";
import AdminView from "./AdminView";
import EditProduct from "./EditProduct";

const AdminHomePage = () => {
    return ( 
        <div>
            <AdminNavBar />

            <marquee><h3>Welcome To Mobile Shop App</h3></marquee>
            
            <Routes>
                <Route path = '/AdminView'  element={<AdminView />}></Route>
                <Route path="/AddProduct" element = {<AddProduct />}></Route>
                <Route path="/EditProduct/:id" element = {<EditProduct />}></Route>
                
            </Routes>
           
        </div>
     );
}
 
export default AdminHomePage;