import React from "react";

type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
export const Count = ({ count, setCount }: Props) => {
  return (
    <div className="container mx-auto">
      <h3>Bấm nút cộng:</h3>
      <button onClick={() => setCount((count) => count + 1)}>
        Số hiện tại {count}
      </button>
    </div>
  );
};
