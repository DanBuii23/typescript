import Button from "./components/button";
import List from "./components/list";
const names = ["Nam", "Phương", "Duy"];
interface Student {
  id: number;
  name: string;
  age: number;
}

const students: Student[] = [
  { id: 1, name: "Đan", age: 23 },
  { id: 2, name: "Thu", age: 20 },
];

export const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Ấn nút</h1>
      <Button
        label="Primary Button"
        onClick={() => alert("Primary Clicked!")}
      />
      <Button
        label="Secondary Button"
        onClick={() => alert("Secondary Clicked!")}
        variant="secondary"
      />
      <h1> Sử dụng generics tạo list với các danh sách khác nhau</h1>
      <h2> Danh sách tên người</h2>
      <List
        items={names}
        renderItem={(name) => <span className="text-blue-500">{name}</span>}
      />
      <h2> Danh sách sinh viên</h2>
      <List
        items={students}
        renderItem={(student) => (
          <div className="border p-2">
            <p className="font-bold">Tên sinh viên: {student.name}</p>
            <p>Tuổi: {student.age}</p>
          </div>
        )}
      />
    </div>
  );
};

export default App;
