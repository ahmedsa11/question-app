import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col, Button } from "react-bootstrap";
import Formm from "./component/form";
import QuestionLi from "./component/que";
import { question } from "./component/data";
function App() {
  const [data, setData] = useState(question);
  const notify = (message, type) => {
    if (type === "error") {
      toast.error(message);
    } else if (type === "success") {
      toast.success(message);
    }
  };
  const add = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);
    notify("تم ادخال السؤال بنجاح ","success");
  };
  const deleteAllItems = () => {
    localStorage.removeItem("items");
    question.splice(0, question.length);
    setData([]);
    notify("تم حذف جميع الاسئله بنجاح ","success");
  };
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items]);
    notify("تم حذف السؤال بنجاح ","success");
    if (items.length <= 0) {
      deleteAllItems();
    }
  };
  return (
    <div className="App">
      <div className="qu">
        <Row> 
          <Col sm={2}>
            <div className="fs-3">اسئله واجوبه شائعه</div>
          </Col>
          <Col sm={8}>
            <Formm add={add} notify={notify} />
            <hr />
            <QuestionLi data={data} deleteOneItem={deleteOneItem} />
            <hr />
            {localStorage.getItem("items") != null ? (
              <Button onClick={deleteAllItems} className="w-100">
                مسح الكل
              </Button>
            ) : null}
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
