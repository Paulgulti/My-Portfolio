import React from 'react'
import './certificate.css'

const Certificates = () => {
    return (
        <div className='certificates container' id="certificates">
            <h3>Certifications</h3>
            <div className='certificates-container'>
                <div className='infos'>
                    <div>
                        <img
                            src='/kuraz-intern.jpg'
                        />
                    </div>
                    <h4>2025 Summer internship program completion at Kuraz Technolgies.</h4>
                    {/* <a target='_blank' href="https://freecodecamp.org/certification/paulgulti/responsive-web-design">Click to see certification</a> */}
                </div>
                <div className='infos'>
                    <div>
                        <img
                            src='/freecodecamp-certificate1.png'
                        />
                    </div>
                    <h4>Responsive Web Design Developer  Certification</h4>
                    <a target='_blank' href="https://freecodecamp.org/certification/paulgulti/responsive-web-design">Click to see certification</a>
                </div>
            </div>
        </div>
    )
}

export default Certificates
