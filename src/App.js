import React, {Component} from 'react'
import './App.css';
import TraficLight from './component/traficLight.js'
const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class App extends Component {
  constructor(){
    super()
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
  return (
    <div className="App">
      <TraficLight currentLight ={this.state.currentLight}/>
    </div>
  );
 }
}

  


export default App;
