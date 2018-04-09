import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import { Link } from 'react-router-dom';

class MyDrawer extends React.Component{
	constructor(props){
		super(props);
		this.state = { open:false};
	}

	handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleTitle= () => this.setState({open: false});

  render() {
    return (
      <div>
      	<AppBar
      		title="Dashboard"
      		onLeftIconButtonClick ={this.handleToggle}
          onTitleClick={this.handleTitle}
      	/>

        <Drawer
          docked={false}
          width={300} 
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link to="/profile"><MenuItem onClick={this.handleClose}><Avatar src="https://png.icons8.com/color/260/person-male.png" size={30} style={{marginTop : 5}} /> Administrator</MenuItem></Link>
          <Link to="/packages/add"><MenuItem onClick={this.handleClose}>Add packages</MenuItem></Link>
          <MenuItem onClick={this.handleClose}>Menu Item 3</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 4</MenuItem>
        </Drawer>

       </div>
    );
  }
}
export default MyDrawer;
