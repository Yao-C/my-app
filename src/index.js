import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
  );

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {/* TODO */}
//       </button>
//     );
//   }
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square />;
//   }

//   render() {
//     const status = 'Next player: X';

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

// const content=[
//   {
//       icon: 'icon-class-name',
//       label: 'Label of Item',
//       to: '#a-link',
//   },
//   {
//       icon: 'icon-class-name',
//       label: 'Second Item',
//       content: [
//           {
//               icon: 'icon-class-name',
//               label: 'Sub Menu of Second Item',
//               to: '#another-link',
//           },
//       ],
//   },
// ];

// ReactDOM.render(
// <MetisMenu content={content} activeLinkFromLocation />,
// document.getElementById('root')
// );