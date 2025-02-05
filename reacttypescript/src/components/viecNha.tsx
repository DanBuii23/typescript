import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { Button } from "@mui/material";

const Icon = ({
  todoId,
  isCompleted,
  updateCheckbox,
}: {
  todoId: string;
  isCompleted: boolean;
  updateCheckbox: (todoId: string) => void;
}) => {
  return (
    <div onClick={() => updateCheckbox(todoId)}>
      {isCompleted ? <CheckBox /> : <CheckBoxOutlineBlank />}
    </div>
  );
};

export const ViecNha = ({
  todoId,
  work,
  isCompleted,
  updateCheckbox,
}: {
  todoId: string;
  work: string;
  isCompleted: boolean;
  updateCheckbox: (todoId: string) => void;
}) => {
  return (
    <Button
      style={{ justifyContent: "space-between" }}
      fullWidth={true}
      endIcon={
        <Icon
          todoId={todoId}
          isCompleted={isCompleted}
          updateCheckbox={updateCheckbox}
        />
      }
    >
      {work}
    </Button>
  );
};
