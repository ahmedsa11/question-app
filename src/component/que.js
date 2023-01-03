import React from 'react'
import { Accordion, Button, Row } from 'react-bootstrap'
import {question}from './data'
function QuestionLi({deleteOneItem}) {
    const dataLocal=JSON.parse(localStorage.getItem('items'))
    const onDelete=(ID)=>{
        if(localStorage.getItem('items')!=null){
            const index = question.findIndex((i)=>i.id===ID)
            question.splice(index,1)
            deleteOneItem(question)
        }
    }
  return (
    <Row>
        <Accordion defaultActiveKey="0">
{localStorage.getItem('items')!=null?(dataLocal.map((item,idx)=>{
    return(
        <Accordion.Item key={idx} eventKey={item.id}>
        <Accordion.Header><div className='m-auto'>{item.q} </div></Accordion.Header>
        <Accordion.Body>
   <div className='d-flex justify-content-between'>
    <p>{item.a} </p>
    <Button onClick={()=>onDelete(item.id)}>مسح السؤال</Button>
   </div>
        </Accordion.Body>
      </Accordion.Item>
    )
})):
(<h2>لاتوجد اسئله الان</h2>)
}
    </Accordion>
    </Row>
  )
}

export default QuestionLi