import React from 'react'
import './Contact.css'
import { BsTwitterX } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'

const Contact = () => {
    return (
        <div id="contact" className='container contact'>
            <div className='footer'>
                <div className='owner'>Paul Gulti</div>
                <span className='year'>@2025| All right reserved</span>
            </div>
            <div className='social-icons'>
                <a href="https://x.com/paulma00s" target='_blank' className='social-icon'><BsTwitterX className='icon'/></a>
                <a href="https://github.com/Paulgulti" target='_blank' className='social-icon'><FaGithub className='icon'/></a>
                <a href="http://linkedin.com/in/paulos-gulti-330245238" target='_blank' className='social-icon'><FaLinkedin className='icon'/></a>
            </div>
        </div>
    )
}

export default Contact
