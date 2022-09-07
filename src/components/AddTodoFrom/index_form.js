import React from 'react';
import './index_form.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRef } from "react";
import { UserContext } from "../../UserContext";
import {useContext} from 'react';

function Index_form(){
const {todos,setTodo} = useContext(UserContext);

function save_todo(input_text){
    if(input_text!==""){
if (todos.length == 0){
    const update = [...todos,{
        text: input_text ,
        complete: false,
        id:0
      }
    ];
    setTodo(update);

}
else{        
    const update = [...todos,{
    text: input_text ,
    complete: false,
    id:todos[todos.length - 1].id + 1
    }
];
setTodo(update);
    }
    }
}

const textRef = useRef();
   
return(
    <form onSubmit={e=>{e.preventDefault();}} className='form'>
        <b id='lable1'>Add Todo</b>
        <TextField inputRef={textRef} id="outlined-basic" placeholder='Add new todo' variant="outlined" />
        <Button onClick={()=>save_todo(textRef.current.value)} type='submit' id='submit_button' variant="contained">Submit</Button>
    </form>
);
}
export default Index_form;