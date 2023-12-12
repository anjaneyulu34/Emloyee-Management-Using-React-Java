import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';



function UpdateEmployeeComponent() {
  
  const navigate=useNavigate();
   const [firstName,setFirstName]=useState("");
   const [lastName,setLastName]=useState("");
   const [emailId,setEmailId]=useState("");
   const {id}=useParams();
   
   useEffect(()=>{
    EmployeeService.getEmployeeById(id).then((res)=>{
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmailId(res.data.emailId);
    }).catch(error=>{
        console.log(error);
    })
   },[])
   
   const cancelHandler=(e)=>
   {
    navigate('/employees');
   }

   const updateHandler=(e)=>
   {
       e.preventDefault();
       const employee={firstName,lastName,emailId};

       if(id){
        EmployeeService.updateEmployee(id,employee).then(res=>{
           navigate('/employees');
        });
       }
       else{
        EmployeeService.createEmployee(employee).then(res=>{
            console.log(res.data);
            navigate('/employees');
        })
       }
   }
  

 return (
        <div className='container mt-3'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
             <h1 className='text-center'>Add Employee</h1>
             <div className='card-body'>
                <div class="form-group">
                    <label className='my-3'>First Name:</label>
                    <input type="text" name="firstName" className='form-control' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label className='my-3'>Last Name:</label>
                    <input type="text" name="lastName" className='form-control' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label className='my-3'>Email Id:</label>
                    <input type="text" name="emailId" className='form-control' value={emailId} onChange={(e)=>setEmailId(e.target.value)}/>
                </div>
                <button className='btn btn-success' onClick={updateHandler}>save</button>
                <button className='btn btn-danger' onClick={cancelHandler} style={{marginLeft:"10px"}}>cancel</button>
             </div>
            </div>

        </div>
      
    </div>
  )
}

export default UpdateEmployeeComponent
