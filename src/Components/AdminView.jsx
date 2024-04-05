import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/AdminViewCss.css';

const AdminView = () => {
  let [data, setData] = useState([])
  let [force, setForce] = useState(true)
  useEffect(() =>{
    axios.get("http://localhost:1000/Product")
    .then((res) =>{
      console.log(res.data)
      setData(res.data)
    })
    .catch((err) =>{
      console.log(err)
    })
  },[force])

  //Function creation
  let navigate = useNavigate()
  
  function editProduct(id){
    navigate(`/AdminHomePage/EditProduct/${id}`) //Back Tick 


  }

  //Delete Function
  function deleteProduct(id,pName){
    axios.delete(`http://localhost:1000/Product/${id}`)
    .then((res) =>
    {
      alert(pName+"Deleted Successfully...!")
      setForce(!force)
    })
    .catch((rej)=>{
      alert("Data Not Found")
    })

  }

    return ( 
        <div className="adminView">
          {data.map((x) =>{
          return(
            <div className ="displayProduct">
             <h1> {x.pModel}</h1>
              <div className='review'>
              <h3>{x.pName}</h3>
             </div>
             <div className='prc'>
             <p>MRP: ${x.pPrice}.00</p>
             </div>
             
             <div className='opt'>

             <EditIcon onClick ={() => {editProduct(x.id)}}/>
             <DeleteForeverIcon onClick = {() => {deleteProduct(x.id,x.pName)}}/>

              </div>
              </div>

          )
          })}
           
            
        </div>
     );
}
 
export default AdminView;