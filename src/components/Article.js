import React,{Component} from 'react';

class Article extends Component{
	constructor(props){
		super(props);
		this.image=this.props.image || "images/gallery/thumbs/02.jpg";
	}
	render(){
		return(
			<article>
                  <a href="images/gallery/fulls/02.jpg" className="image">
                    <img src={this.image} alt="" />
                  </a>
                  <div className="caption">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <ul className="actions">
                      <li><span className="button small">Details</span></li>
                    </ul>
                  </div>
                </article>
			)
	}
}

export default Article;