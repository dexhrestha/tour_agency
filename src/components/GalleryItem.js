import React,{ Component } from 'react';

class GalleryItem extends Component{
	constructor(props){
		super(props)
		this.icon=this.props.icon;
		this.containerClass='icon style2 major ' +this.icon;
	}
	render(){
		return(
			<section>
                  <span className={this.containerClass}></span>
                  <h3>{this.props.title}</h3>
                  <p>{this.props.description}</p>
                </section>

			)
	}
}

export default GalleryItem;