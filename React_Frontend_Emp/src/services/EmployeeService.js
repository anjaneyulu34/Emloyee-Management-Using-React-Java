import axios from "axios";

const EMPLOYEE_BASE_URL="http://localhost:8989/api/v1/employees";

class EmployeeService
{
      getEmployees(){
        return axios.get(EMPLOYEE_BASE_URL);
      }

      createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_URL,employee);
      }
      getEmployeeById(id,employee){
        return axios.get(EMPLOYEE_BASE_URL+'/'+id,employee)
      }
      updateEmployee(id,employee)
      {
        return axios.put(EMPLOYEE_BASE_URL+'/'+id,employee);
      }

      deleteEmployee(id){
        return axios.delete(EMPLOYEE_BASE_URL+'/'+id);
      }
}

export default new EmployeeService();