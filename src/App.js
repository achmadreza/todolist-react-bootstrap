import React, {Component} from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import uuid from 'uuid';





export default class App extends Component{
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem: false
  };

  handleChange= e =>{
    this.setState({
      item:e.target.value
    });
  };
  handleSubmit=(e)=> {
    e.preventDefault();

  const newItem= {
    id:this.state.id,
    title: this.state.item
  };
    

  
  const updateItems=[...this.state.items,newItem];
    this.setState({
      items: updateItems,
      id: uuid(),
      item:"",
      editItem:false
    });
  };
clearList = () =>{
  this.setState({
    items:[]
  })
}

handleDelete = (id) => {
  const filteredItems = this.state.items.filter(item=>item.id !==id)
  this.setState({
    items:filteredItems
  })
}

handleEdit = (id) => {
  const filteredItems = this.state.items.filter(item=>item.id 
    !==id);

    const selectedItem = this.state.items.find(item => item.id ===id)

    console.log(selectedItem);

  this.setState({
    items: filteredItems,
    item: selectedItem.title,
    editItem: true,
    id:id
  });
};

  render() {
    return (
      

   <div className="container bg-light">
   <div className="row">
   <div className="col-10 mx-auto col-md-8 mt-4">
   <h3 className="text-capitalize text-center">Item Input</h3>
   
   <TodoInput item={this.state.item} 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}/>
              
    <TodoList 
    items={this.state.items} 
    clearList={this.clearList} 
    handleDelete={this.handleDelete}
    handleEdit = {this.handleEdit}
    
    />
   </div>
   </div>
   </div>

 
         
    );
  }
}  
  
