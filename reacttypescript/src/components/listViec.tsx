import { TodoListType } from "../App";
import { ViecNha } from "./viecNha";

export const ListViec = ({
  list,
  updateCheckbox,
}: {
  list: TodoListType[];
  updateCheckbox: (todoId: string) => void;
}) => {
  return (
    <div>
      <ul>
        <li>
          {list.map((li) => {
            return (
              <ViecNha
                key={li.id}
                todoId={li.id}
                work={li.work}
                isCompleted={li.isCompleted}
                updateCheckbox={updateCheckbox}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
};
