import React from 'react'
import { Link } from 'react-router-dom'
import AssetCreationForm from './Forms/Asset';
import { useState } from 'react';
import AssetTable from './DataTable_assets';
import Sidemenu from './sidebar/sidemenu';
import '../src/pages.css'

function AssetData() {

    const [selectedEmployee, setSelectedEmployee] = useState(new Set());

    const handleCheckboxChange = (id: number) => {
        const newSelectedEmployee = new Set(selectedEmployee);
        newSelectedEmployee.has(id) ? newSelectedEmployee.delete(id) : newSelectedEmployee.add(id);
        setSelectedEmployee(newSelectedEmployee)
    };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width:'1300px', margin:'auto', justifyContent:'space-between', backgroundColor:'gray', height: '100vh',}}>
     
        {/* Side navigation bar*/}
        <div style={{ width: '300px', margin:'30px' }}>
            <b>NAV BAR</b>
            <Sidemenu/>
        </div>
    
        {/*Asset Information table*/ }
        <div style={{}}>
            <div style={{width: '1000px'}}>
                <div><h1 style={{textAlign: 'center'}}>Asset Data</h1></div>
                <div style={{textAlign:'center', backgroundColor: 'lightgray', borderLeft: '3px solid black', borderTop: '3px solid black', borderRight:'3px solid black', width: '1000px'}}>
                    Reminder: Please only add eletronic assests. Software is tracked on a different application. Please see IT personnel with any questions
                </div>
                
                <div style={{display:'flex',justifyContent: 'center', backgroundColor: 'lightgray', borderLeft: '3px solid black', borderRight:'3px solid black', width: '1000px' }}>
                    <p>
                        <ul>
                            <li>Printers</li>
                            <li>Computers</li>
                            <li>Tablets</li>
                            <li>Monitors</li>
                            <li>Televisions</li>
                        </ul>
                    </p>
                    <p>
                        <ul>
                            <li>Projectors</li>
                            <li>Copiers/Scanners</li>
                            <li>Headphones</li>
                            <li>Mice</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div style={{width:'1000px',border: '3px solid black', margin:'auto',  backgroundColor: 'lightgray' }}>
                <div style={{textAlign: 'center'}}><h3 style={{marginBottom: '0',}}>Eletronic Asset Data</h3></div>

                <div>
                    <AssetTable/>
                </div>
                
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', width: '400px', justifyContent: 'space-evenly', margin:'auto'}}>

                <div>
                    <Link to="/asset">
                        <button style={{border: '2px solid black'}} >
                            Add Asset
                        </button>
                    </Link>
                </div>

                <div>
                    <button style={{border:'2px solid black'}}>
                        Delete Asset
                    </button>
                </div>

                <div>
                    <button style={{border:'2px solid black' }}>
                        Update Asset
                    </button>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default AssetData;