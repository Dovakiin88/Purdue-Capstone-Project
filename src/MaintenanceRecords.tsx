import React from 'react'
import Sidemenu from './sidebar/sidemenu'
import { Link } from 'react-router-dom'
import maintain from './static/images/maintenance.jpeg'

function MaintenanceRecords() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '1300px', margin: 'auto', justifyContent: 'space-between', backgroundColor: 'white' }}>

            {/* Side navigation bar*/}
            <div style={{ width: '300px', marginTop: '10px' }}>
                <b>NAV BAR</b>
                <Sidemenu />
            </div>

            {/*Asset Information table*/}
            <div style={{ margin: '5px', display: 'flex', flexDirection: 'column' }}>
                <div style={{}}>
                    <div><h1 style={{ textAlign: 'center' }}>Maintenance Records</h1></div>
                    <div style={{ textAlign: 'center' }}>
                        Reminder: Please only add maintenance records for eletronic assets  <b>ONLY</b>. This system
                        keeps track of:
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', margin: '0px' }}>
                        <p>
                            <ul>
                                <li>Asset Id</li>
                                <li>Model Number</li>
                                <li>Asset Name</li>
                                <li>Maintenance Date</li>
                                <li>Maintenance Report</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div style={{ width: '900px', border: '3px solid black', margin: 'auto' }}>
                    <div style={{ textAlign: 'center' }}> <h3>Maintenance Rocords</h3></div>

                    <div style={{ textAlign: 'center' }}>
                        <p>
                            Please note that the delete function is disabled. Maintenance records should <b>NEVER</b> be deleted
                        </p>
                    </div>

                    <div style={{ margin: 'auto', width: '900px' }}>
                        <Link to={"https://drive.google.com/drive/folders/1Kbxx2ifJv_nMiPmCLx18zXrpafuVB-Uj?usp=drive_link"}>
                            <button style={{ width: '125px', height: '175px', border: '2px solid black', marginLeft: '370px', marginBottom: '20px' }}>
                                <img src={maintain} width="100px" height="100px" alt="" />
                                <h5>Maintenance Records</h5>
                            </button>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default MaintenanceRecords