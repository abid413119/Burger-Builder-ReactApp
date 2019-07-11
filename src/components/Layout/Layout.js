import React from 'react';
import AUX from '../../hoc/AUX';
import Classes from './Layout.css';

export default function Layout(props) {
    return (
        <AUX>
            <div>Navbar, Navigation Drawer, Backdrawer</div>
            <main className={Classes.Content}>
                {props.children}
            </main>
        </AUX>
    )
}
