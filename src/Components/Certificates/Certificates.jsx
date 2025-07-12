import React from 'react'
import './certificate.css'

const Certificates = () => {
    return (
        <div className='certificates container' id="certificates">
            <h3>Certifications</h3>
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
    )
}

export default Certificates
