import React from 'react';
import wrapper from '../../hoc/wrapper';
import "./Layout.css";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../Footer/Footer';

class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerShowHandler = () => {
        this.setState({
            showSideDrawer: true
        })
    }
    render () {
        return (
            <wrapper>
                <Toolbar showSideDrawer={this.sideDrawerShowHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
                <main className="Content">
                    {this.props.children}
                </main>
                
                <Footer />
            </wrapper>
        )
    }
}
export default Layout;