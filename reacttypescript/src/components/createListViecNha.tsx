import { Button, TextField } from "@mui/material";
import { ChangeEvent } from "react";

type Props = {
  nextWorkText: string;
  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
  btnThem: () => void;
};

export const CreateListViecNha = ({
  nextWorkText,
  onChangeText,
  btnThem,
}: Props) => {
  return (
    <div>
      <TextField
        size="small"
        value={nextWorkText}
        onChange={onChangeText}
      ></TextField>
      <Button variant="contained" onClick={btnThem}>
        Thêm
      </Button>
    </div>
  );
};
