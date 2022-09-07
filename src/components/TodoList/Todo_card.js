import React from 'react';
import './Todo_card.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CgCloseR } from 'react-icons/cg';
import { CgCheckR } from 'react-icons/cg';
import { useContext } from 'react';
import { UserContext } from "../../UserContext";


function Todo_card(props){
  const {todos,setTodo} = useContext(UserContext);

  function remove_todo(id){
    let newtodo2 = todos;
    newtodo2.filter(todos.findIndex(x => x.id === id));
    setTodo(newtodo2);
    setTodo([...todos])
  }
  
  function done_todo(id){
      let index = todos.findIndex(x => x.id === id);
    if (todos[index].complete){
        let newtodo = todos;
        newtodo[index].complete= false;
        setTodo(newtodo);
        setTodo([...todos])
    }
    else{
      let newtodo = todos;
      newtodo[index].complete= true;
      setTodo(newtodo);
      setTodo([...todos])

    }
}

  function linethruogh(){
    return todos[todos.findIndex(x => x.id === props.id)].complete ? {"textDecoration": "line-through"}: {};
  }

return(
<Card variant="outlined" className="card">
<React.Fragment>
      <CardContent className="card_content">
        <Typography className="todo-text" variant="body2" style={linethruogh()}>
        {props.text}
        </Typography>
      </CardContent>
      <CardActions className="buttons_area">
       <Button variant='string' onClick={()=>{done_todo(props.id)}}><CgCheckR size={30} color={"green"} /></Button>
        <Button variant='string' onClick={()=>{remove_todo(props.id)}}><CgCloseR size={30} color={"red"}/></Button>
      </CardActions>
    </React.Fragment>
</Card>
);
}


export default  Todo_card;