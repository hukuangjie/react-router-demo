import React from 'react';
import { Route, Link } from 'react-router-dom';
import Raise from './workplace/Raise'
import Hair from './workplace/Hair'

function Workplace() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/workplace/raise">程序员加薪</Link></li>
                    <li><Link to="/workplace/hair">程序员植发</Link></li>
                </ul>
            </div>
            <div className="workplaceContent">
                <div>
                    <h3>程序员技能</h3>
                </div>
                <Route path="/workplace/raise" component={Raise}></Route>
                <Route path="/workplace/hair" component={Hair}></Route>
            </div>
        </div>
    )
}
export default Workplace