import { Component } from 'react';
import header from '../styles/header.less';
class ComponentHeader extends Component{
	render(){
		return(
			<div class='header'>我是header并且name是{this.props.name}</div>
		)
	}
}

export default ComponentHeader;
