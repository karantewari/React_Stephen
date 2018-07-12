import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term : ''
    }

    onInputChange = (event) => {
        this.setState({term:event.target.value});
    }

    render(){
        return (
        <div>
            <input 
                onChange={this.onInputChange}
                value={this.state.term}
            />
        </div>
    );
    }
    
}
export default SearchBar;

