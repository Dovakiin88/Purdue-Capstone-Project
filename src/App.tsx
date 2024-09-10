import React from 'react';
import './static/main.css'
import { Link } from 'react-router-dom'
import maintenance from './static/images/maintenance.jpeg'
import asset from './static/images/asset.jpeg'
import employee from './static/images/employee.png'
import policies from './static/images/policies.jpeg'
import audit from './static/images/audit.jpeg'
import copyright from './static/images/copyright.png'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'grey', height: '100vh' }}>

      <div style={{ display: 'flex', backgroundColor: 'lightgray', border: '2px solid black', borderRadius: '10px', padding: '2px', margin: 'auto' }}>

        <div style={{ width: '100px', marginTop: '5px' }}>
          <h3 className='rotated-text' style={{ fontSize: '90px', transform: 'translateY(310%) translateX(50%) rotate(-90deg)' }} >
            Welcome
          </h3>
        </div>

        <div style={{ margin: 'auto', width: '750px', marginTop: '5px', paddingTop: '0px' }}>
          <div style={{ textAlign: "center", margin: '40px', marginTop: '10px' }}>
            <h1 style={{ fontSize: '45px' }}>SITSI Inventory Management System</h1>
          </div>

          <div>
            {/* First line of buttons*/}
            <div style={{ display: 'flex', flexDirection: 'row', margin: '20px', justifyContent: 'space-evenly' }}>
              {/*button 1 */}
              <Link to='/assetdata'>
                <button className='raised-button' style={{ width: '225px', height: '195px', marginLeft: '60px', marginRight: '2px', border: '2px solid black' }}>
                  <img src={asset} style={{ width: '120px', height: '120px' }} alt="" />
                  <h3>Asset Data</h3>
                </button>
              </Link>


              {/*button 2 */}
              <Link to={'/employeedata'}>
                <button className='raised-button' style={{ width: '225px', height: '195px', marginRight: '60px', marginLeft: '2px', border: '2px solid black' }}>
                  <img src={employee} style={{ width: '120', height: '120px' }} alt="" />
                  <h3>Employee Data</h3>
                </button>
              </Link>
            </div>

            {/* Second line of buttons*/}
            <div style={{ display: 'flex', flexDirection: 'row', margin: '20px', justifyContent: 'space-evenly' }}>
              {/*button 3 */}
              <Link to={'maintenancerecords'}>
                <button className='raised-button' style={{ width: '225px', height: '195px', marginLeft: '60px', marginRight: '2px', border: '2px solid black' }}>
                  <img src={maintenance} style={{ width: '120px', height: '120px' }} alt="" />
                  <h3>Maintenance Records</h3>
                </button>
              </Link>

              {/*button 4 */}
              <Link to={'securitypolicy'}>
                <button className='raised-button' style={{ width: '225px', height: '195px', marginRight: '60px', marginLeft: '2px', border: '2px solid black' }}>
                  <img src={policies} style={{ width: '120px', height: '120px' }} alt="" />
                  <h3>Security Policies</h3>
                </button>
              </Link>
            </div>

            {/* Third line of buttons*/}
            <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto', justifyContent: 'center' }}>
              <Link to={'auditdata'}>
                <button className='raised-button' style={{ width: '225px', height: '195px', border: '2px solid black' }}>
                  <img src={audit} style={{ width: '170px', height: '120px', justifyContent: 'center' }} alt="" />
                  <h3>Audit Data</h3>
                </button>
              </Link>
            </div>
          </div>

          {/*Footer */}
          <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
            <div><img src={copyright} style={{ width: '10px', height: '10px', marginRight: '3px' }} alt="" /></div> <div>Skyrim Information Technology Services Inc.</div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
