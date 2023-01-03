import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { question } from "./data";
function Formm({ add ,notify}) {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");
  const addNewItem = () => {
    if(qu===''||an===''){
        notify('يجب ادخال البيانات','error')
        return
    }
    question.push({ id: Math.random(), q: qu, a: an });
    setQu("");
    setAn("");
    add();
  };
  return (
    <>
      <Row>
        <Col sm={5}>
          <Form.Control
          value={qu}
            onChange={(e) => setQu(e.target.value)}
            type="text"
            placeholder="ادخل السؤال الاول "
          />
        </Col> 
        <Col sm={5}>
          <Form.Control
             value={an}
            onChange={(e) => setAn(e.target.value)}
            type="text"
            placeholder="ادخل الاجابه "
          />
        </Col>
        <Col sm={2}>
          <Button onClick={addNewItem} className="w-100" type="submit">
            اضافه
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Formm;
