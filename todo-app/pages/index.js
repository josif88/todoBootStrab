import React, { useState, useEffect } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { Button, Form, Card } from "react-bootstrap";

export default function Home() {
  const [todoText, setToDoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleText = (obj) => {
    setToDoText(obj.target.value);
  };

  const addTodo = (todo) => {
    setTodoList([todo, ...todoList]);
    setToDoText("");
    localStorage.setItem("todos", JSON.stringify([todo, ...todoList]));
  };

  const clearList = () => {
    setTodoList([]);
    localStorage.setItem("todos", "");
  };

  const removeItem = (item) => {
    setTodoList(todoList.filter((el) => el !== item));

    localStorage.setItem(
      "todos",
      JSON.stringify(todoList.filter((el) => el !== item))
    );
  };

  useEffect(() => {
    let todos = localStorage.getItem("todos");
    if (todos) {
      setTodoList(JSON.parse(todos));
    }
  }, []);

  return (
    <div className="container">
      <Alert variant="warning">
        <Form>
          <Row>
            <Col xs={1}>
              <Form.Label>TODO</Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control
                type="text"
                placeholder="input text"
                onChange={handleText}
                value={todoText}
              />
            </Col>
            <Col xs={1}>
              <Button
                variant="success"
                onClick={() => {
                  addTodo(todoText);
                }}
              >
                Add
              </Button>
            </Col>
            <Col xs={2}>
              <Button variant="danger" onClick={clearList}>
                Remove all
              </Button>
            </Col>
          </Row>
        </Form>
      </Alert>
      <div className="todoList">
        {todoList.map((a) => (
          <Card>
            <Card.Body>
              <Row>
                <Col xs={11}>
                  <Card.Text>{a}</Card.Text>
                </Col>
                <Col xs={1} stye={{ paddingRight: 10 }}>
                  <Button
                    onClick={() => {
                      removeItem(a);
                    }}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

<Card>
  <Card.Body>
    <Row>
      <Col xs={11}>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Col>
      <Col xs={1} stye={{ paddingRight: 10 }}>
        <Button>Remove</Button>
      </Col>
    </Row>
  </Card.Body>
</Card>;
