import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';

export default class ListEmployeeComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            employees:[]
        }
    }
   componentDidMount(){
    EmployeeService.getEmployees().then((res)=>{
        this.setState({employees:res.data})
    })
   }
   
    deleteEmployee=(id)=>{
                EmployeeService.deleteEmployee(id).then(res=>{
                  EmployeeService.getEmployees().then(res=>{
                    this.setState({employees:res.data})
                  })

                }).catch(error=>{
                  console.log(error);
                })
    }
   render() {
      return (
        <div>
        <h2 className='text-center'>Employee List</h2>
        <div className='row'>
        <Link to="/add-employee" className='btn btn-outline-primary mt-4 w-100'>Add Employee</Link>

        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                this.state.employees.map(employees=>{
                    return <tr>
                        <td>{employees.id}</td>
                        <td>{employees.firstName}</td>
                        <td>{employees.lastName}</td>
                        <td>{employees.emailId}</td>
                        <td>
                          <Link to="/update-employee/104" element={<UpdateEmployeeComponent/>}>Update</Link>
                          <button className='btn btn-danger' style={{marginLeft:"15px"}} onClick={()=> this.deleteEmployee(employees.id)}>Delete</button>
                        </td>
                    </tr>
                })
            }
          </tbody>
        </table>
        </div>
      </div>
    )
  }
}
