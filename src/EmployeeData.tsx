import React, { useEffect, useState } from 'react'
import EmployeeCreationForm from './Forms/Employee'
import { Link } from 'react-router-dom'
import EmployeeTable from './DataTable';
import Sidemenu from './sidebar/sidemenu';
import '../src/pages.css'

function EmployeeData() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('api/employeedata');
            const data = await response.json()
            setEmployees(data)
        };

        fetchData();
    }, []);

    const [selectedEmployee, setSelectedEmployee] = useState(new Set());

    const handleCheckboxChange = (id: number) => {
        const newSelectedEmployee = new Set(selectedEmployee);
        newSelectedEmployee.has(id) ? newSelectedEmployee.delete(id) : newSelectedEmployee.add(id);
        setSelectedEmployee(newSelectedEmployee)
    };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width:'1300px', margin:'auto', justifyContent:'space-between', backgroundColor:'gray', height: '100vh'}}>
     
        {/* Side navigation bar*/}
        <div style={{width:'300px', margin: '30px'}}>
            <b>NAV BAR</b>
            <Sidemenu/>
        </div>
    
        {/*Employee Information table*/ }
        <div style={{}}>
            <div style={{width: '1000px'}}>
                <div><h1 style={{textAlign: 'center'}}>Employee Data</h1></div>
                <div style={{textAlign:'center', backgroundColor: 'lightgray', borderLeft: '3px solid black', borderTop: '3px solid black', borderRight:'3px solid black', width: '1000px'}}>
                    Reminder: <b>DO NOT</b> add personally identifiable informaion (PII) of any employee in this table.
                    If PII is needed, please contact Human Resources. Only the following information can be added to the table; Anything else
                     <b> WILL</b> be deleted and discinplinary action may occur:
                </div>
                
                <div style={{display:'flex',justifyContent: 'center', backgroundColor: 'lightgray', borderLeft: '3px solid black', borderRight:'3px solid black', width: '1000px' }}>
                    <p>
                        <ul>
                            <li>First name- No nicknames</li>
                            <li>Last Name</li>
                            <li>Employee ID</li>
                            <li>Office ID</li>
                        </ul>
                    </p>
                    <p>
                        <ul>
                            <li>Assigned Asset Group ID- This is the set of electronics they were assigned</li>
                            <li>Department Number</li>
                            <li>Desk Number</li>
                            <li>Email Address</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div style={{width:'1000px',border: '3px solid black', margin:'auto',  backgroundColor: 'lightgray' }}>
                <div style={{textAlign: 'center'}}> <h3  style={{marginBottom: '0',}}>Employees</h3></div>

                <div style={{backgroundColor: 'lightgray'}}>
                    <EmployeeTable/>
                </div>
                
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', width: '400px', justifyContent: 'space-evenly', margin:'auto'}}>

                <div>
                    <Link to="/employee">
                        <button style={{border: '2px solid black'}} >
                            Add Employee
                        </button>
                    </Link>
                </div>

                <div>
                    <button style={{border:'2px solid black'}}>
                        Delete Employee
                    </button>
                </div>

                <div>
                    <button style={{border:'2px solid black' }}>
                        Update Employee
                    </button>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default EmployeeData
