import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Student {
  id: string;
  name: string;
}

export const StudentList = () => {
  const [students, setStudents] = useState<Student[]>(() => {
    const savedList = JSON.parse(localStorage.getItem("students") ?? "[]");
    if (savedList?.length) {
      return savedList;
    }
    return [];
  });
  const [newStudentText, setNewStudentText] = useState<string>("");

  // Thêm sinh viên mới
  const addStudent = () => {
    if (newStudentText.trim() === "") return;
    const newStudent: Student = { id: uuidv4(), name: newStudentText };
    setStudents([newStudent, ...students]);
    setNewStudentText("");
  };

  // Xóa sinh viên
  const removeStudent = (id: string) => {
    setStudents(students.filter((student) => student.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);
  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <TextField
        size="small"
        type="text"
        value={newStudentText}
        onChange={(e) => setNewStudentText(e.target.value)}
        placeholder="Nhập tên sinh viên"
      />
      <Button variant="contained" onClick={addStudent}>
        Thêm
      </Button>

      <ul>
        {students.map((student) => (
          <li
            key={student.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{student.name}</span>
            <button onClick={() => removeStudent(student.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
