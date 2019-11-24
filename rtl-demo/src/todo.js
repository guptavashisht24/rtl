import React, {useState} from 'react';
import './App.css';
import {addItem, removeItem} from "./actions";
import { connect } from "react-redux";

export const Todo = (props) => {
  const [data, setData] = useState('')

  const updateData = (e)=>{
    setData(e.target.value)
  }

  const generateTodo = ()=>{
    const list = props.items.map((data, key)=>(
      <li key={key}>{data}</li>
    ))
    return(
      <ul>
        {list}
      </ul>
    )
  }
   console.log(props.items)
   return (
    <div>
      <div className="flex">
        <input type="text" value={data} onChange = {(event)=>{updateData(event)}}/>
          <button type="button" onClick = {()=>{props.addItem("random")}}>ADD</button>
          <button type="button" onClick = {()=>{props.removeItem()}}>REMOVE</button>
      </div>
      {generateTodo()}
    </div>
    )
    }

    const mapStateToProps = state => ({
      items : state.items
    })
    
    const mapDispatchToProps = dispatch => ({
      addItem: (item) => dispatch(addItem(item)),
      removeItem: () => dispatch(removeItem())
    });

export default connect(mapStateToProps, mapDispatchToProps)(Todo)    
