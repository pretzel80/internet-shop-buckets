import React from 'react';
import "./Header.css";
import logoHeader from './../../img/logo-header.png'

const Header = ({title}) => {

        return (
            <div>
                <div className="header">
                    <div className="logo-header">
                        <img src={logoHeader} alt="#" style={{width: 100}}/>
                    </div>
                    <div>
                        <h5>Ведро - это очень полезный предмет</h5>
                        <h5>У нас они есть, а у Вас его нет</h5>
                    </div>
                    <div>
                        <p>#(050) 12-34-5678</p>
                        <p>#(067) 12-34-5678</p>
                        <p>test@testing.com</p>
                    </div>
                </div>
                <h2>{title}</h2>
            </div>
        );
}

export default Header;