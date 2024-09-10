import React from 'react'
import assetIcon from '../static/images/assetIcon.png';
import employeeIcon from '../static/images/employeeIcon.png';
import auditIcon from '../static/images/auditIcon.png';
import maintenanceIcon from '../static/images/maintenance Icon.png';
import securityIcon from '../static/images/security.png'
import { Link } from 'react-router-dom';


function Sidemenu() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div>
                <img src={assetIcon} width='50px' style={{ margin: '2px' }}  alt="" />
            </div>
            <div>
                <Link to={"/assetData"}>
                    <button style={{ width: '250px', height: '50px', margin:' 2px' }}>
                        <h4>Asset Data</h4>
                    </button>
                </Link>
            </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
                <img src={employeeIcon} width='50px'  style={{ margin: '2px' }} alt="" />
            </div>
            <div>
                <Link to={"/employeedata"}>
                    <button style={{ width: '250px', height:'50px', margin: '2px' }}>
                        <h4>Employee Data</h4>
                    </button>
                </Link>
            </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
                <img src={auditIcon} width="50px" style={{ margin: '2px'}} alt="" />
            </div>
            <div>
                <Link to={"/auditData"}>
                    <button style={{ width: '250px', height: '50px', margin: '2px' }}>
                        <h4>Audit Data</h4>
                    </button>
                </Link>
            </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div>
                <img src={securityIcon}  width="50px" style={{ margin: '2px' }} alt="" />
            </div>
            <div>
                <Link to={"/securitypolicy"}>
                    <button style={{ width: '250px', height: '50px', margin: '2px' }}>
                        <h4>Security Policy</h4>
                    </button>
                </Link> 
            </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div>
                <img src={maintenanceIcon}  width='50px' style={{ margin:'2px' }} alt="" />
            </div>
            <div>
                <Link to={"/maintenancerecords"}>
                    <button style={{ width: '250px', height:'50px', margin: '2px' }}>
                        <h4>Maintenance Records</h4>
                    </button>
                </Link>
            </div>
        </div>

        <div style={{ textAlign: 'center', color:'white' }}>
            Please report any Issues to IT personnel.
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ fontSize: '10px', textAlign: 'center', margin: 'auto' }}>
            Icons Supplied by:
            <div style={{ justifyContent: 'center' }}>
                <a href="https://www.flaticon.com/free-icons/cloud-storage" title="cloud-storage icons">Cloud-storage icons created by Design Circle - Flaticon</a>
            </div>
        </div>
    </div>
  )
}

export default Sidemenu
