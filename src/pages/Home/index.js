import React, { useEffect, useRef, useState } from "react";
import { BsPlus, BsTrash } from "react-icons/bs";

import { Container, CreateTodo, ListTodo } from "./style";

function Home() {
  const [showCadastro, setShowCadastro] = useState(false);

  const [lastId, setLestId] = useState(0);
  const [tasks, setTasks] = useState([]);
  const refsTask = {
    grup: useRef(null),
    colorGrup: useRef(null),
    titulo: useRef(null),
    anotacao: useRef(null),
  };
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);

    const maxId = storedTasks.reduce((max, task) => Math.max(max, task.id), 0);
    setLestId(maxId);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const handleCreateTodo = () => {
    const titulo = refsTask.titulo.current.value;
    const anotacao = refsTask.anotacao.current.value;
    const groupTitle = refsTask.grup.current.value;
    const colorGrup = refsTask.colorGrup.current.value;

    const newTask = {
      id: lastId + 1,
      colorGrup,
      groupTitle,
      titulo,
      anotacao,
      finished: false,
    };
    setTasks([...tasks, newTask]);
    setLestId(lastId + 1);
    setShowCadastro(false);
  };
  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, finished: !task.finished } : task
    );
    setTasks(updatedTasks);
  };
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <header>
        <p>Bem vindo 👋</p>
        <h2>Visitante</h2>
      </header>
      <div className="filter">
        <h3>Lista de Anotações</h3>
      </div>
      {tasks.map(
        (task) =>
          task.finished === false && (
            <ListTodo key={task.id}>
              <section className="headerList">
                <span
                  className="dotColor"
                  style={{ background: `${task.colorGrup}` }}
                />
                <span>{task.groupTitle}</span>
              </section>
              <section className="infos resumo">
                <input
                  type={"checkbox"}
                  onChange={() => handleCheckboxChange(task.id)}
                />
                <h2
                  style={{
                    textDecoration: task.finished ? "line-through" : "none",
                  }}
                >
                  {task.titulo}
                </h2>
              </section>
              <p
                style={{
                  textDecoration: task.finished ? "line-through" : "none",
                }}
              >
                {task.anotacao}
              </p>
            </ListTodo>
          )
      )}
      {showCadastro && (
        <CreateTodo onClick={() => setShowCadastro(false)}>
          <div className="formTask" onClick={(e) => e.stopPropagation()}>
            <div className="createGrup">
              <input
                type={"text"}
                placeholder="nome do grupo"
                className="groupTitle"
                ref={refsTask.grup}
              />
              <input
                type={"color"}
                className="groupColor"
                ref={refsTask.colorGrup}
              />
            </div>

            <input type={"text"} placeholder="Titulo" ref={refsTask.titulo} />
            <textarea
              placeholder="Anotação"
              style={{ resize: "none" }}
              ref={refsTask.anotacao}
            />
            <button className="btnEnviar" onClick={handleCreateTodo}>
              Criar
            </button>
          </div>
        </CreateTodo>
      )}

      {tasks.map(
        (task) =>
          task.finished === true && (
            <ListTodo>
              <div key={task.id}>
                <section className="headerList">
                  <span
                    className="dotColor"
                    style={{
                      background: task.finished ? "#c1c1c1" : task.colorGrup,
                    }}
                  />
                  <span
                    style={{ color: task.finished ? "#c1c1c1" : "#6C68BB" }}
                  >
                    {task.groupTitle}
                  </span>
                </section>
                <section className="infos resumo">
                  <input
                    type={"checkbox"}
                    onChange={() => handleCheckboxChange(task.id)}
                  />
                  <h2
                    style={{
                      textDecoration: task.finished ? "line-through" : "none",
                      color: task.finished ? "#c1c1c1" : "#6C68BB",
                    }}
                  >
                    {task.titulo}
                  </h2>
                </section>
                <p
                  style={{
                    textDecoration: task.finished ? "line-through" : "none",
                    color: task.finished ? "#c1c1c1" : "#6C68BB",
                  }}
                >
                  {task.anotacao}
                </p>
                <button className="viewComplet">
                  <BsTrash
                    size={15}
                    color="#6C68BB"
                    onClick={() => handleDeleteTask(task.id)}
                  />
                </button>
              </div>
            </ListTodo>
          )
      )}
      {!showCadastro && (
        <footer>
          <button className="add" onClick={() => setShowCadastro(true)}>
            <BsPlus size={30} color="#6C68BB" />
          </button>
        </footer>
      )}
    </Container>
  );
}

export default Home;
