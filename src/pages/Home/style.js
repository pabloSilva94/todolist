import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;

  header {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    padding: 10px;
  }
  .filter {
    display: flex;
    gap: 10px;
    button {
      background: transparent;
      border: none;
      color: #f1f1f1f1;
      cursor: pointer;
    }
  }
  footer {
    position: absolute;
    width: 100%;
    top: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    .add {
      height: 60px;
      width: 60px;
      border-radius: 100%;
      border: none;
      background: transparent;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;
export const ListTodo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 590px;
  height: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  gap: 10px;

  .headerList {
    display: flex;
    gap: 10px;
    .dotColor {
      width: 15px;
      height: 15px;
      border-radius: 100%;
    }
  }
  .infos {
    display: flex;
    white-space: nowrap;
    align-items: center;
    overflow: hidden;
    gap: 10px;
    input {
      height: 15px;
      width: 15px;
    }
  }
  p {
    width: 100%;
    padding: 0 25px;
  }
  .viewComplet {
    background: transparent;
    border: 0;
    color: #f1f1f1;
    text-align: right;
    padding: 0 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export const CreateTodo = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100vh;
  padding: 0 5px;

  .formTask {
    display: flex;
    flex-direction: column;
    background: #f3f2f5;
    width: 100%;
    height: 400px;
    max-width: 550px;
    border-radius: 5px;
    padding: 20px;
    gap: 20px;
    .headerForm {
      display: flex;
      gap: 10px;
      .selectGrup {
        gap: 10px;
        .btnGroup {
          border: none;
          width: 50px;
          height: 100%;
        }
      }
      .addGroup {
        width: 40px;
        border-radius: 5px;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
    .createGrup {
      display: flex;
      width: 100%;
      gap: 10px;
      .groupTitle {
        width: 100%;
      }
      .groupColor {
        width: 40px;
      }
    }
    .selectGrup,
    input {
      display: flex;
      align-items: center;
      padding: 0 5px;
      width: 100%;
      height: 50px;
      border: none;
      border-radius: 5px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    textarea {
      height: 170px;
      border: none;
      border-radius: 5px;
      padding: 3px 5px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .btnEnviar {
      height: 50px;
      border-radius: 5px;
      border: 2px solid #6c68bb;
      background: #a8a6d5;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      color: #f3f2f5;
      font-size: 18px;
    }
  }
`;
