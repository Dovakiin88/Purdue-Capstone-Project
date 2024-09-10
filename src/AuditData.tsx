import Sidemenu from './sidebar/sidemenu';
import React from 'react'
import { Link } from 'react-router-dom';

function AuditData() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '1500px', margin: 'auto', backgroundColor: 'white' }}>

            {/* Side navigation bar*/}
            <div style={{ width: '300px', margin: '30px' }}>
                <b>NAV BAR</b>
                <Sidemenu />

            </div>

            {/*Asset Information table*/}
            <div style={{}}>
                <div>
                    <div><h1 style={{ textAlign: 'center' }}>Audit Data</h1></div>
                    <div style={{ textAlign: 'center', backgroundColor: 'lightgray', borderLeft: '3px solid black', borderTop: '3px solid black', borderRight: '3px solid black', width: '1000px' }}>
                        Reminder: Audit data is upload and read only. Only IT personnel can update or delete Audit reports; However,
                        Audit report should <b>NEVER</b> be deleted. User logs are reviewed routinely and discinplinary action up to termination may occur if
                        an unauthorized removal of a audit report occurs.
                    </div>
                </div>

                <div style={{ width: '1000px', border: '3px solid black', margin: 'auto', backgroundColor: 'lightgrey' }}>
                    <div style={{ textAlign: 'center' }}> <h3>Audit Reports</h3></div>
                    <div>
                        <p style={{ textAlign: 'center' }}>
                            Note: Update and delete functions are disabled
                        </p>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        No Audits as of yet. Once the company is audited, The link to the google drive will populate here
                    </div>
                    <div>
                        <p style={{ textAlign: 'center' }}>
                            Below you will find links to some of the most important regulations design to protect data. Always feel free to review these standards
                        </p>

                    </div>

                    <div style={{ display: 'flex', width: '500px', justifyContent: "space-evenly", margin: 'auto' }}>

                        <div>
                            <Link to={"https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/audit/protocol/index.html"}>
                                <button className='raised-button' style={{ margin: '10px', border: '2px solid black', backgroundColor: 'white', width: '150px', height: '65px' }}>
                                    HIPPA Checklist
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link to={"https://listings.pcisecuritystandards.org/documents/PCI_DSS-QRG-v3_2_1.pdf"}>
                                <button className='raised-button' style={{ margin: '10px', border: '2px solid black', backgroundColor: 'white', width: '150px', height: '65px' }}>
                                    PCI DSS Checklist
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link to={"https://securiti.ai/what-is-the-gramm-leach-bliley-act-glba/"}>
                                <button className='raised-button' style={{ margin: '10px', border: '2px solid black', backgroundColor: 'white', width: '150px', height: '65px' }}>
                                    Gramm Leach Bliley Act
                                </button>
                            </Link>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AuditData