import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component{

  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>

      );
    });
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}
        </div>
        </div>
        )
        }
        }

const mapStateToProps = (state) => {
  return {streams: Object.values(state.streams)} //Object.values is a built in js
  // it will take an object as an argument and all the different values from the object and turn it into an Array.
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
