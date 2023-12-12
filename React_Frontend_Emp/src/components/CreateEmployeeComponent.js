import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function CreateEmployeeComponent() {

  let navigate =useNavigate();

  const [employee,setEmployee] =useState({
            firstName:"",
            lastName:"",
            emailId:""
  });

   const saveHandler=(e)=>{
    e.preventDefault();
    console.log("employee =>"+JSON.stringify(employee));
    EmployeeService.createEmployee(employee).then(res=>{
        navigate('/employees')
    })

   }

   const cancelHandler=(e)=>
   {
    navigate('/employees');
   }
  
   const handleClick=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setEmployee({... employee,[name]:value});
   }

    return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
             <h1 className='text-center'>Add Employee</h1>
             <div className='card-body'>
                <div class="form-group">
                    <label className='my-3'>First Name:</label>
                    <input type="text" name="firstName" className='form-control' value={employee.firstName} onChange={handleClick}/>
                </div>
                <div class="form-group">
                    <label className='my-3'>Last Name:</label>
                    <input type="text" name="lastName" className='form-control' value={employee.lastName} onChange={handleClick}/>
                </div>
                <div class="form-group">
                    <label className='my-3'>Email Id:</label>
                    <input type="text" name="emailId" className='form-control' value={employee.emailId} onChange={handleClick}/>
                </div>
                <button className='btn btn-success' onClick={saveHandler}>save</button>
                <button className='btn btn-danger' onClick={cancelHandler} style={{marginLeft:"10px"}}>cancel</button>
             </div>
            </div>

        </div>
      
    </div>
  )
}

export default CreateEmployeeComponent
