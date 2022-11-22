import { Container } from '@mui/system';
import React, { useState } from 'react'
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'



export default function Formulario2() {

  const TEAM_CLINIC = [
    { id: '1', name: 'Ana Montalvo' },
    { id: '2', name: 'Carlos Bejarano' },
    { id: '2', name: 'Juan Fernando' },
  ];
  
  
  const [items, setItems] = useState(TEAM_CLINIC)

  const dataMap = items.map((el, i) => {
  
    return (
      <Draggable keys={el.id} draggableId={el.id.toString()} index={i} >
        {(provided) => {
          return(
            <div {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
              <card style={{width: '100%',padding:50,margin:20}}>
                {el.name}
              </card>
            </div>
          )
        }}
      </Draggable>
  )  
})

const handleOnDragEnd =(res) =>{
  const itemsCopy= [...items]
  const [reorderedItem] = itemsCopy.splice(res.source.index,1)
  itemsCopy.splice(res.destination.index, 0, reorderedItem)
  setItems(itemsCopy)
}

return(
  <div className='Formulario2'>
    <Container>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='items'>
          {(provided)=>{
            return(
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {dataMap}
                {provided.placeholder}
              </div>
            )
          }}
        </Droppable>
      </DragDropContext>
    </Container>
  </div>
);
}



