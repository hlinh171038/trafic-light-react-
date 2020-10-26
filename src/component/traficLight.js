import React, {Component} from 'react';
import './traficLight.css';
import classnames from 'classnames';
const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class TraficLight extends Component {
    
    constructor(){
        super();
        this.state = {
            currentLight : RED
        }
        console.log(this.currentLight);
       setInterval(()=>{
        console.log(this.currentLight);
            this.setState({
                currentLight: this.getNextLight(this.state.currentLight)
            });   
       }, 1000)
    } 
     getNextLight(color){
         switch(color){
             case RED:
                return ORANGE;
             case ORANGE:
                return GREEN;
            default:
                return RED;
         }
     }
    render(){
        let {currentLight} = this.state
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