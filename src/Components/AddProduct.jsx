import axios from 'axios';
import { useState } from 'react';
import '../Style/AddProductCss.css';

const AddProduct = () => {
    let [pName, setName] = useState("")
    let [pPrice, setPrice] = useState("")
    let [pModel, setModel] = useState("")
    

    let data = {pName,pPrice,pModel}
    let addProduct = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:1000/Product",data)
        .then((res) => {
            console.log(res);
            alert("Product Added Successfully..!!");
        })
        .catch((err) => {
            alert("Somthing Went Wrong...!");
        });
    };

    return ( 
        <div className="additems">
            <form onSubmit={addProduct}>

                <u><h3>ADD Mobile PRODUCT</h3></u>
               
                <label>
                    Product Name:
                    <input  required
                    value={pName} 
                    onChange={(e) =>setName(e.target.value)}
                    type="text" placeholder="Enter Product Name"></input>
                </label><br></br>
                <label>
                    Product Price:
                    <input required
                    value={pPrice}
                    onChange={(e)=>setPrice(e.target.value)}
                    type="text" placeholder="Enter Product Price"></input>
                </label><br></br>
                <label>
                    Model:
                    <input required
                    value={pModel} 
                    onChange={(e) =>setModel(e.target.value)}
                    type="text" placeholder=" Enter Model Here"></input>
                </label><br></br>
             <button type="submit">Add</button>
            </form>
           
        </div>
     );
}
 
export default AddProduct;