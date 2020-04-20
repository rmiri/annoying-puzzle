import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import '../App.css';

class Drag extends React.Component {
 
  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };
 
  render() {
    return (
        <div className="App">
            <h1 className="white">Incredibly Annoying Puzzle</h1>
            <h3 className="white">The goal of this app is to make you annoyed</h3>
            <p className="white">Drag the puzzle to fit them, nothing will happen if you succed</p>
      <Draggable
        // axis="x"
        handle=".handle"
        defaultPosition={{x: 50, y: 0}}
        position={null}
        grid={[1, 2]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
           <img className='handle' src='images/p1.png' /> 
      </Draggable>
    <Draggable
        // axis="x"
        handle=".handle"
        defaultPosition={{x: 10, y: 10}}
        position={null}
        grid={[1, 1]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <img className='handle' src='images/p2.png' />
    </Draggable>
        <Draggable
            // axis="x"
            handle=".handle"
            defaultPosition={{x: 20, y: 120}}
            position={null}
            grid={[25, 25]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
                <img className='handle' src='images/p3.png' />
        </Draggable>
        <Draggable
            axis="x"
            handle=".handle"
            defaultPosition={{x: 40, y: 140}}
            position={null}
            grid={[25, 25]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
                <img className='handle' src='images/p4.png' />
        </Draggable>
        </div>
    );
  }
}
 
export default Drag