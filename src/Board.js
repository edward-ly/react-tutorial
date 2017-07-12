import React from 'react';
import Square from './Square.js';

class Board extends React.Component {
  renderSquare(i, j) {
    let id = this.props.width * i + j;
    return (
      <Square
        key={id}
        value={this.props.squares[id]}
        onClick={() => this.props.onClick(id)}
      />
    );
  }

  render() {
    return (
      <div>
        {Array(this.props.width).fill(null).map((x, i) => {
          return (
            <div key={i} className="board-row">
              {Array(this.props.width).fill(null).map((y, j) => {
                return this.renderSquare(i, j);
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Board;
