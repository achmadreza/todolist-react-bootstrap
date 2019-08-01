import React, {Component} from 'react';

import {faBook  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TodoInput extends Component{

    
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props;

        return(
            <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                <div className="input-group-prepend">
                <div className="input-group-text bg-outline-primary text-white">
                <FontAwesomeIcon icon={faBook}/>
                </div>
                </div>
                <input type="text" className="form-control text-capitalize"
                 placeholder="add item "
                 value={item}
                 onChange={handleChange}/>
                
                </div>
                <button type="submit" 
                className={
                    editItem ? "btn btn-block btn-warning mt-4": 
                    "btn btn-block btn-info mt-4"
                }>
                {editItem ? 'Edit item': 'Add item'}
                </button>
                </form>
            </div>
        );
    }
}