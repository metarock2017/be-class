import { Component } from 'react'
import {Router, Route, Link, browserHistory} from 'react-router';
import list from '../styles/list.css';
class ComponentList extends Component{
    constructor() {
        super();
        this.state = {
            list : []
        }
    }
    //该方法在完成首次渲染之前被调用
    componentWillMount() {
        console.log('componentWillMount')
    }
    //render之后渲染完
    componentDidMount() {
        console.log('componentDidMount')
    }
    //组件获取到新的属性
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }
    //组件改变前
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    //组件改变后
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    //组件移除前
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    addList() {
        this.setState({list : this.state.list.concat(this.refs.listValue.value)})
    }
	render(){
        const list = this.state.list;
        const listBlock = list.length ? list.map((item,index) => 
            (<li key={index}><Link to={`detail/${index}`}>{item}</Link></li>)
        ) : '还没有注意事项';
		return(
            <div>
                <ul>{listBlock}</ul>
                <div>
                    <input ref="listValue" type="text"/>
                    <button type="button" onClick={() => this.addList()}>添加注意事项</button>
                </div>
            </div>
			
		)
	}
}
export default ComponentList;