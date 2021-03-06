import React from 'react';
import Board from './Board.js';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      boardWidth: 3,
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      moveListIsReversed: false,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game start';
      if (move === this.state.stepNumber) {
        // eslint-disable-next-line
        return <li key={move}><a href="#" onClick={() => this.jumpTo(move)}><b>{desc}</b></a></li>;
      } else {
        // eslint-disable-next-line
        return <li key={move}><a href="#" onClick={() => this.jumpTo(move)}>{desc}</a></li>;
      }
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner.winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    // eslint-disable-next-line
    let reverseToggle = <a href="#" onClick={() => this.setState({ moveListIsReversed: !this.state.moveListIsReversed, })}>Reverse List</a>;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            width={this.state.boardWidth}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winningSquares={winner ? winner.squares : null}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>{reverseToggle}</div>
          <ol>{this.state.moveListIsReversed ? moves.reverse() : moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;

// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {winner: squares[a], squares: lines[i]};
    }
  }
  return null;
}
