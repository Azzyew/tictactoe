import React from 'react';
import { Square } from './square';
import * as utils from './../main';
import './../App.css';

export class Board extends React.Component {
    constructor(props) {
    super(props)

        this.state = {
            boxes: Array(9).fill(null),
            xIsNext: true
        }
    }

    handleBoxClick(index) {
        const boxes = this.state.boxes.slice()

        if (utils.findWinner(boxes) || boxes[index]) {
            return
        }

        if(utils.areAllBoxesClicked(boxes) === true) {
            return
        }

        boxes[index] = this.state.xIsNext ? 'x' : 'o'

    this.setState({
            boxes: boxes,
            xIsNext: !this.state.xIsNext
        })
    }

    handleBoardRestart = () => {
        this.setState({
            boxes: Array(9).fill(null),
            xIsNext: true
        })
    }

    render() {
    const winner = utils.findWinner(this.state.boxes)
    const isFilled = utils.areAllBoxesClicked(this.state.boxes)

        if (winner) {
            alert(`O vencedor é: ${winner}!`);
        } else if(!winner && isFilled) {
            alert(`Deu velha!`);
        } else {
        }

        return (
            <>
                <div className="board-wrapper">
                    <div className="board">

                        <div className="board-row">
                            <Square value={this.state.boxes[0]} onClick={() => this.handleBoxClick(0)} />

                            <Square value={this.state.boxes[1]} onClick={() => this.handleBoxClick(1)} />

                            <Square value={this.state.boxes[2]} onClick={() => this.handleBoxClick(2)} />
                        </div>

                        <div className="board-row">
                            <Square value={this.state.boxes[3]} onClick={() => this.handleBoxClick(3)} />

                            <Square value={this.state.boxes[4]} onClick={() => this.handleBoxClick(4)} />

                            <Square value={this.state.boxes[5]} onClick={() => this.handleBoxClick(5)} />
                        </div>

                        <div className="board-row">
                            <Square value={this.state.boxes[6]} onClick={() => this.handleBoxClick(6)} />

                            <Square value={this.state.boxes[7]} onClick={() => this.handleBoxClick(7)} />

                            <Square value={this.state.boxes[8]} onClick={() => this.handleBoxClick(8)} />
                        </div>
                    </div>

                    {winner && <div className="board-footer">
                        <button className="btn" onClick={this.handleBoardRestart}>Jogar de novo</button>
                    </div>}
                </div>
            </>
        )
    }
}