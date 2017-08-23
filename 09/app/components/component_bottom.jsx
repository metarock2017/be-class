import { Component } from 'react'
import bottom from '../styles/bottom.css';
class ComponentBottom extends Component{
	render(){
        console.log('bottom-style',bottom)
		return(
			<div class={bottom.bottom}>我是bottom</div>
		)
	}
}
export default ComponentBottom;