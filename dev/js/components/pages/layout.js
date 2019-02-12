import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router';
import Nav from './nav';
import LayoutStore from '../../stores/layoutStore';
import LayoutAction from '../../actions/layoutAction';

const Layout = React.createClass ({
    mixins: [Reflux.connect(LayoutStore, 'layoutStore')],
    clickCheck(){
        LayoutAction.testClick();
    },
    render(){
        console.log("111111111111111",this.state.layoutStore);
        const { location } = this.props;
        const containerStyle ={
            marginTop: "60px"
        }
        return (
            <div>
                <Nav location={location} />
                <div className="container" style={containerStyle}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 onClick={this.clickCheck}>HEADER SHOWING THE FLAG STATUS</h1>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

export default Layout;