import { Distortion  } from './components/distortion';
import { Flies } from './components/flies';
import { SplitColor } from './components/splitColor';
import { LiquidDistortion } from './components/liquidDistortion';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Blotter.Js in ReactJs</h1>
        <p>Distortion Text</p>
        <Distortion text={"Distortion Text"} />
        <hr />
        <p>Flies Material Text</p>
        <Flies text={"Flies Text"} />
        <hr />
        <p>Liquid Distortion Text</p>
        <LiquidDistortion text={"Liquid Distortion Text"} />
        <hr />
        <p>Split Color Text</p>
        <SplitColor text={"Split Color Text"} />
        <hr />
      </div>
    </div>
  );
}

export default App;
