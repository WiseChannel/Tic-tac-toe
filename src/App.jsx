import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.state = {
            squares: Array(9).fill(null),
            count: 0
        }
    }


    clickHendler = event => {
        console.log('work');
        let data = event.target.getAttribute('data'); //номер квадрата по которому кликнули
        let currentSquare = this.state.squares;
        currentSquare[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
        this.setState({ count: this.state.count + 1 });
        this.setState({ squares: currentSquare });
    }

    render() {
        return (
            <div className='tic-tac-toe'>
                <div className='ttt-grid' onClick={this.clickHendler} data='0'>{this.state.squares[0]}</div>
                <div className='ttt-grid' onClick={this.clickHendler} data='1'>{this.state.squares[1]}</div>
                <div className='ttt-grid' onClick={this.clickHendler} data='2'>{this.state.squares[2]}</div>
                <div className='ttt-grid' onClick={this.clickHendler} data='3'>{this.state.squares[3]}</div>
                <div className='ttt-grid' onClick={this.clickHendler} data='4'>{this.state.squares[4]}</div>
                <div className='ttt-grid' onClick={this.clickHendler} data='5'>{this.state.squares[5]}</div>
                <div className='ttt-grid' onClick={this.clickHendler} data='6'>{this.state.squares[6]}</div>
                <div className='ttt-grid' onClick={this.clickHendler} data='7'>{this.state.squares[7]}</div>
                <div className='ttt-grid' onClick={this.clickHendler} data='8'>{this.state.squares[8]}</div>
            </div>
        )
    }
}
export default App;
