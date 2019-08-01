import React, {Component} from 'react';
import TodoItem from './TodoItem';


export default class Todolist extends Component{

    render() {
        const{items,clearList, handleDelete, handleEdit}= this.props;
        return(
            <div className = "List-group my-5">
            <h3 className="text-center">Item List</h3>


    
        {items.map(item=> {
            return <TodoItem key={item.id} 
            title={item.title}
            handleDelete={()=>handleDelete(item.id)}
            handleEdit={()=>handleEdit(item.id)}
            />;

            
        })
    }
    
                
                <button type="submit" className="btn btn-dark btn-block mt-5" 
                onClick={clearList}>Clear List</button>

            </div>
        );
    }
}