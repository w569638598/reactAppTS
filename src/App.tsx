import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CountComp } from './components/CountCom';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <CountComp num={222} onChange={(n) => {

//       }}>

//       </CountComp>
//     </div>
//   );
// }

// export default App;


interface IState {
  num: number
}


export class App extends React.Component<{}, IState> {
  state = {
    num: 0
  }
  render() {
    return (
      <CountComp num={this.state.num} onChange={n => {
        this.setState({
          num: n
        })
      }}></CountComp>
    )
  }
}
