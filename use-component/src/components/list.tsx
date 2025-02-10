import React from "react";

interface ListProps<T> {
  items: T[]; // Mảng dữ liệu tùy chỉnh
  renderItem: (item: T, index: number) => React.ReactNode; // Hàm render item
}

const List = <T,>({ items, renderItem }: ListProps<T>) => {
  return (
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index}>{renderItem(item, index)}</li>
      ))}
    </ul>
  );
};

export default List;
