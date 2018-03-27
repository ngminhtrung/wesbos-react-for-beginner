import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getFunName } from '../helpers';

class StorePicker extends Component {
    constructor(props) {
        super(props);
        this.goToStore = this.goToStore.bind(this);
    }

    goToStore(e) {
        e.preventDefault();
        console.log('You Changed the URL');
        const storeId = this.storeInput.value;
        this.props.history.push(`/store/${storeId}`)
    }

    render() {
        return (
            <form 
                className="store-selector"
                onSubmit={(e) => this.goToStore(e)}>
                <h2> Please Enter A Store </h2>
                <input 
                    type="next" 
                    required placeholder="Store Name" 
                    defaultValue={getFunName()}
                    ref={(input) => {this.storeInput = input}}/>
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;