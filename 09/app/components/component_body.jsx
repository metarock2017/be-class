import { Component } from 'react';
import ComponentHeader from './component_header';
import ComponentBottom from './component_bottom';
import Input from './component_input';
import ComponentList from './compoment_list';
class ComponentBody extends Component{
	render(){
		return(
			<div>
                <ComponentHeader name={'cxy'}/>
                {this.props.children}
                <Input />
                <ComponentBottom />
            </div>
		)
	}
}

export default ComponentBody;