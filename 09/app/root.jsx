import { Component } from 'react';
import { render } from 'react-dom';
import {Route,IndexRoute, Router, hashHistory} from 'react-router';
import Hello from './components/hello';
import ComponentList from './components/compoment_list';
import ComponentDetail from './components/component_detail';
import ComponentBody from './components/component_body';
class Root extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={ComponentBody}>
                    <IndexRoute component={ComponentList} />
                    <Route path="hello" component={Hello} />
                </Route>
                <Route path="detail/:id" component={ComponentDetail} />
            </Router>
        );
    }
}
render(<Root />,document.querySelector('#app'));
