import { Component } from 'react'

class Hello extends Component{
	componentWillMount() {
		let mySet = {
			method: 'GET'
		}
        let url = "http://localhost:8888/fetch.php";
		fetch(url, mySet).then(res =>{ return res.text(); }).then(res => console.log(res))
    }
	render(){
		return(
			<h1>hello world{this.props.params.id}</h1>
		)
	}
}

export default Hello
