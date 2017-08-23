import { Component } from 'react';
class ComponentDetail extends Component{
	render(){
		return(
			<div>ComponentDetail的路径为detail/{this.props.params.id}</div>
		)
	}
}

export default ComponentDetail;
