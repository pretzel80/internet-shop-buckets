import React from 'react';
import "./Footer.css";

const Footer = () => {

        return (
            <div>
                <div className="footer">
                    <div>
                        <h5>designed by <span style={{color:"white"}}>"Beginner Company"</span> <span style={{color: "darkred"}}>2021</span></h5>
                    </div>
                    <div className={'footer-contacts'}>
                        <div>#(050) 12-34-5678</div>
                        <div>#(067) 12-34-5678</div>
                        <div>test@testing.com</div>
                    </div>
                </div>
            </div>
        );
}

export default Footer;