import React from 'react';

class SearchBar extends React.Component {
    state = {term: 'Hi there!'};

onFormSubmit = (event) => {
    event.preventDefault(); {/* the event.preventDefault() method keeps the form from submitting automatically and in the process referesh the page*/}
    this.props.onSubmit(this.state.term);
}

    
    
    render() {
    return(
    <div className="ui segment">
    <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
            <label>Image Search</label>
            <input type="text"
        value={this.state.term}
        onChange={(e) => this.setState({term: e.target.value})} /> {/*onChange property checks if the value of the element has been changed or not. As soon as a change is detected we create a call back to onInputChange.
 */}   
        </div>
    </form>
        
    </div>
    );
}
}

export default SearchBar;