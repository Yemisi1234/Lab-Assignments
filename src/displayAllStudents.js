import { useEffect, useState } from "react";
export default function AllStudents() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const api = fetch("http://localhost:3000/api/v1/students");
      const data = await (await api).json();
      setStudents(data);
    };
    getData();
  }, []);
  const deleteStudent = async (id) => {
    const response = await fetch(
      `http://localhost:3000/api/v1/students/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      setStudents((prevState) =>
        prevState.filter((student) => student.id !== id)
      );
    }
  };
  return (
    <div className="student-container">
      <h1>All Students</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Program</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.program}</td>
              <button className="del" onClick={() => deleteStudent(student.id)}>
                delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
