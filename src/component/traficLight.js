import React, {Component} from 'react';
import './traficLight.css';
import classnames from 'classnames';
const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class TraficLight extends Component {   
    render(){
        let {currentLight} = this.props
        return (
            <div className="TraficLight">
                <div className={classnames('buld', 'red',{
                    active: currentLight === RED
                })}></div>
                 <div className={classnames('buld', 'orange',{
                    active: currentLight === ORANGE
                })}></div>
                 <div className={classnames('buld', 'green',{
                    active:currentLight === GREEN
                })}></div>
            </div>
        )
    }
}
 export default TraficLight