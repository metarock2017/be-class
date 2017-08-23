import { Component } from 'react';
class ComponentDetail extends Component{
    constructor() {
        super()

        this.state = {
            xx: ''
        }
    }
    inputChange(e) {
        this.setState({
            xx: e.currentTarget.value
        })
    }
	render() {
		return(
			<div>
                <input onChange={e => this.inputChange(e)} type="text" ref="a"/>
                <p>{this.state.xx}</p>
            </div>
		)
	}
}

export default ComponentDetail;
