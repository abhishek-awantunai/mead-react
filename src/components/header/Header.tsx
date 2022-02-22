import React from 'react';
import './Header.module.scss';

interface HeaderProps {
    
}

interface HeaderState {
    
}

class Header extends React.Component<HeaderProps, HeaderState> {
    render() { 
        return (
            <header>
                <div>
                    <img src="https://cdn.moglix.com/online/prod/pwa-ab/bundles/assets/img/moglix_logo_PWA_3x.png" />
                    <ul>
                        <li>Login</li>
                        <li>Deals</li>
                        <li>Cart</li>
                    </ul>
                </div>
                <div>
                    <input className="form-control mt-4" type="text" placeholder="You are looking for" />
                </div>
            </header>
        );
    }
}

export default Header;