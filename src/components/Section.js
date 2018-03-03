import React, {Component} from 'react';

class Section extends Component{
	constructor(props){
		super(props);
		this.orient = this.props.orient  || 'orient-right';
		//console.log(orient)
		this.containerClass = 'spotlight style1 '+ this.orient +' content-align-left image-position-center onscroll-image-fade-in';
		this.image=this.props.image || "images/spotlight01.jpg"
	}
	
	render(){

		return(
			<section className={this.containerClass} >
            <div className="content">
              <h2>{this.props.title}</h2>
              <p>{this.props.description}</p>
              <ul className="actions vertical">
                <li><a href="#" className="button">Learn More</a></li>
              </ul>
            </div>
            <div className="image">
              <img src={this.image} alt="" />
            </div>
          </section>
			)
	}

}
export default Section;