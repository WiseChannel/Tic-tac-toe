import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.state = {
            squares: Array(9).fill(null),
            count: 0
        }
        this.winnerLine = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
    }

    isWiner = () => {
        let s = (this.state.count % 2 === 0) ? 'X' : 'O'; //проверка элемента по клику
        for (let i = 0; i < 8; i++) {
            let line = this.winnerLine[i];
            if (this.state.squares[line[0]] === s
                && this.state.squares[line[1]] === s
                && this.state.squares[line[2]] === s ) {
                    alert(s + 'win')
                setTimeout(() => {
                    this.setState({ squares: Array(9).fill(null) });
                    this.setState({ count: Array(9).fill(null) })
                }, 3000)
            }
        }
    };

    clickHendler = (event) => {
        console.log('work');
        let data = event.target.getAttribute('data'); //номер квадрата по которому кликнули
        let currentSquare = this.state.squares;

        if (currentSquare[data] === null) {
            currentSquare[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
            this.setState({ count: this.state.count + 1 });
            this.setState({ squares: currentSquare });
        } else {
            alert(new Error('Нельзя нажимать два раза'));
            console.error('Нельзя нажимать два раза')
        }

        this.isWiner()

    };

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
