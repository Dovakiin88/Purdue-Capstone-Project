import React from 'react';
import { useState } from 'react';
import { storage } from './firebaseConfig';
import { ref, uploadBytes } from 'firebase/storage';
import { Link } from 'react-router-dom'
import empPic from '../src/static/images/employee.png';
import assetPic from './static/images/asset.jpeg';
import Sidemenu from './sidebar/sidemenu';


function SecurityPolicies() {

    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '1300px', margin: 'auto', justifyContent: 'space-between', backgroundColor:'White', paddingRight: '40px', paddingLeft: '40px' }}>

            {/* Side navigation bar*/}
            <div style={{ width: '300px', marginTop: '20px', paddingRight: '30px'}}>
                <b style={{ textAlign: 'center', margin: 'auto' }}>NAV BAR</b>
                <Sidemenu/>
            </div>

            {/*Asset Information table*/}
            <div style={{}}>
                <div>
                    <div><h1 style={{ textAlign: 'center' }}>Security Policies</h1></div>
                    <div style={{ textAlign: 'center' }}>
                        Reminder: Please ensure that any changes to security policies are approved by the department heads
                        before adding to database
                    </div>
                </div>

                <div style={{ width: '900px', border: '3px solid black', margin: 'auto' }}>
                    <div style={{ textAlign: 'center' }}> <h3>Security Policies</h3></div>
                    <div style={{ textAlign: 'center' }}>Please note: Please submit any documents you wish to add to the IT department</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', width: '400px', justifyContent: 'space-evenly', margin: 'auto', padding: '20px', backgroundColor: 'white' }}>

                    <Link to={"https://drive.google.com/drive/folders/1x61pDBiz9DaAtb-nb2QVuKXP05Oebonm?usp=drive_link"}>
                        <button >
                            <img src={empPic} width= "100px" height="100px" alt="" />
                            <h5>Employee Policies</h5>
                        </button>
                    </Link>

                    <Link to={"https://drive.google.com/drive/folders/1YBhOm7_kNNlGqgLza9cRnpPRjD3rDOGa?usp=sharing"}>
                        <button>
                            <img src={assetPic}  width="100px" height="100px" alt="" />
                            <h5>Asset Policies</h5>
                        </button>
                    </Link>
                    
                </div>
                
            </div>

        </div>
    )
}

export default SecurityPolicies