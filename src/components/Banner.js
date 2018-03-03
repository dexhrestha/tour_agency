import React, {Component} from 'react';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class Banner extends Component{
	constructor(props){
		super(props);
		this.orient = this.props.orient  || 'orient-right';
		//console.log(orient)
		this.containerClass = 'banner style1 orient-left content-align-center image-position-right fullscreen onload-image-fade-in onload-content-fade-right';
		this.backgroundImage = "https://static.pexels.com/photos/531880/pexels-photo-531880.jpeg"
	}	
	
	render(){
	//Add Search bar
		return(
			<section style={{backgroundImage : "url("+this.backgroundImage+")",
			backgroundSize: 'cover',
            overflow: 'hidden',}}
            className={this.containerClass}>
            
            <div className="content">
              <h1>{this.props.title}</h1>
              <p className="major">{this.props.description}</p>

              <ul className="actions vertical">
                
                <MuiThemeProvider>
                <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={()=>console.log("onRequestSearch")}
                  style={{
        		margin: '0 auto',
        		maxWidth: 800
      			}}
      			hintText="Search Here"
                /> 
                </MuiThemeProvider>
                              </ul>
            </div>
           
          </section>
          
			)
	}

}
export default Banner;