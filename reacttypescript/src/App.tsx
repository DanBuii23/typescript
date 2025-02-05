import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { Count } from "./components/count";
import { CreateListViecNha } from "./components/createListViecNha";
import { ListViec } from "./components/listViec";
import { v4 as uuidv4 } from "uuid";

export type TodoListType = {
  id: string;
  work: string;
  isCompleted: boolean;
};

function App() {
  const [count, setCount] = useState<number>(0);
  const [list, setList] = useState<TodoListType[]>(() => {
    const savedList = JSON.parse(localStorage.getItem("list") ?? "[]");
    if (savedList?.length) {
      return savedList;
    }
    return [];
  });
  const [nextWorkText, setNextWorkText] = useState("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setNextWorkText(e.target.value);
  };
  const btnThem = () => {
    const nextWork: TodoListType = {
      id: uuidv4(),
      work: nextWorkText,
      isCompleted: false,
    };
    setList([nextWork, ...list]);
    setNextWorkText("");
  };

  const updateCheckbox = (todoId: string) => {
    setList((prevState) => {
      return prevState.map((li) => {
        if (li.id === todoId) {
          return { ...li, isCompleted: !li.isCompleted };
        }
        return li;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <h1>Tăng số: </h1>
      <Count count={count} setCount={setCount} />
      <br></br>
      <h1>Danh sách công việc: </h1>

      <CreateListViecNha
        nextWorkText={nextWorkText}
        onChangeText={onChangeText}
        btnThem={btnThem}
      />
      <ListViec list={list} updateCheckbox={updateCheckbox} />
    </>
  );
}

export default App;
