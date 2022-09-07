import './index_list.css';
import Box from '@mui/material/Box';
import Todo_card from './Todo_card';
import React, {useContext} from 'react';
import { UserContext } from "../../UserContext";

function Index_List(props){
  const {todos,setTodo} = useContext(UserContext);
  let itemsToRender;
  if (todos) {
    itemsToRender = todos.map(item => {
      return <Todo_card id ={item.id} key={"t"+item.id} text={item.text}/>;
    });
  }
    return (
        <Box id="box" sx={{ width: `${60}%`,height: 100}}>
      {
        itemsToRender
      }
        </Box>
      );
}
export default Index_List;