import React from 'react';
import { connect } from 'react-redux';

var counter = 0;
class Charts extends React.Component {


  constructor(props) {
    super(props);

    this.state={
      chart1: 0,
      chart2: 0,
      chart3: 0,
      hoverChartId: "",
    };

  }

  startTimer = () => {
    console.log("inside startTimer()");
      this.interval = setInterval(() => {
        counter = counter + 1;
      }, 1000);
  }

  stopTimer = () => {
    console.log("inside stopTimer()");

    clearInterval(this.interval);
    console.log(counter);
    console.log(this.state.hoverChartId);
    if (this.state.hoverChartId === "chart1") {
      this.setState({chart1: this.state.chart1 + counter});
      this.setState({hoverChartId: ""});
    }
     if (this.state.hoverChartId === "chart2") {
      this.setState({chart2: this.state.chart2 + counter});
      this.setState({hoverChartId: ""});
    }
      if (this.state.hoverChartId === "chart3") {
        this.setState({chart3: this.state.chart3 + counter});
        this.setState({hoverChartId: ""});
      }

    console.log(this.state);
    // this.setState({[this.state.hoverChartId]: })
    counter = 0;
    // this.setState({count: counter})

  }

  render() {
    return (
      <div>
        <div onMouseOver={() => {this.setState({hoverChartId: "chart1"}); this.startTimer()}} onMouseOut={this.stopTimer}  className="ui placeholder segment chart1">
          <div className="ui icon header">
            Chart 1
          </div>
        </div>
        <div
          onMouseOver={() => {this.setState({hoverChartId: "chart2"}); this.startTimer()}}
          onMouseOut={this.stopTimer}
          className="ui placeholder segment chart2">
          <div className="ui icon header">
            Chart 2
          </div>
        </div>
        <div
           onMouseOver={() => {this.setState({hoverChartId: "chart3"}); this.startTimer()}}
           onMouseOut={this.stopTimer}
           className="ui placeholder segment chart3">
          <div className="ui icon header">
            Chart 3
          </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
};

export default connect(mapStateToProps)(Charts);

// import React, { Component } from "react";
// import SimpleStorage from "react-simple-storage";
//
// class Charts extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newItem: "",
//       list: []
//     };
//   }
//
//
//
//   addItem() {
//     // create a new item with unique id
//     const newItem = {
//       id: 1 + Math.random(),
//       value: this.state.newItem.slice()
//     };
//
//     // copy current list of items
//     const list = [...this.state.list];
//
//     // add the new item to the list
//     list.push(newItem);
//
//     // update state with new list, reset the new item input
//     this.setState({
//       list,
//       newItem: ""
//     });
//   }
//
//   deleteItem(id) {
//     // copy current list of items
//     const list = [...this.state.list];
//     // filter out the item being deleted
//     const updatedList = list.filter(item => item.id !== id);
//
//     this.setState({ list: updatedList });
//   }
//
//   render() {
//     return (
//       <div className="App">
//
//         <SimpleStorage parent={this} />
//
//         <div
//           style={{
//             padding: 50,
//             textAlign: "left",
//             maxWidth: 500,
//             margin: "auto"
//           }}
//         >
//           Add an item to the list
//           <br />
//           <input
//             type="text"
//             placeholder="Type item here"
//             value={this.state.newItem}
//             onChange={e => this.updateInput("newItem", e.target.value)}
//           />
//           <button
//             onClick={() => this.addItem()}
//             disabled={!this.state.newItem.length}
//           >
//             &#43; Add
//           </button>
//           <br /> <br />
//           <ul>
//             {this.state.list.map(item => {
//               return (
//                 <li key={item.id}>
//                   {item.value}
//                   <button onClick={() => this.deleteItem(item.id)}>
//                     Remove
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Charts;
