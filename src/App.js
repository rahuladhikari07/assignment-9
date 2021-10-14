import React,{useState} from "react"
import TodoLists   from './components/TodoLists';
import './App.css';
import './index.css';

const App = ()=>{
  const [inputList,setInputList]=useState("");
  const [items,setItems]=useState([]);
  
  const itemEvent = (event)=>{
   setInputList(event.target.value);
  };
  const listOfItems = ()=>{
setItems((prevItems)=>{
  return [...prevItems,inputList];
});
setInputList(" ");
  };
  const deleteItems= (id)=>{
    //console.log("deleted")
setItems((oldItems)=>{
  return oldItems.filter((arrItem,index)=>{
   return index!==id ;
 })
})
  }
 

 
  

 
  


  return <div className="main_div">
    <div className="center_div">
      <br />
      <h1>ToDo List</h1>
      <br/>
      <input type="text" placeholder="add item" onChange={itemEvent} value={inputList} />
      <button onClick={listOfItems}>+</button>

      <ol>
      { items.map((itemval,index) =>{
       return <TodoLists 
        key ={index}
        id ={index}
        text={itemval}
       onSelect={deleteItems}

      
      
     
        />
         
       })}
      </ol>
      


    </div>

  </div>




}

export default App;
