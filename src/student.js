import { useState } from "react";
import AllStudents from "./displayAllStudents";
export default function Student() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    program: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const response = fetch("http://localhost:3000/api/v1/students/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ id: "", name: "", program: "" });
      } else {
        console.error("Failed to register student");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const resetForm = () => {
    setFormData({ id: "", name: "", program: "" });
  };

  return (
    <div>
      <form className="container" method="POST" onSubmit={submitHandler}>
        <h2>Create a student</h2>
        <div className="input-label">
          <label>id:</label>
          <br />
          <input
            type="text"
            name="id"
            placeholder="Enter student id"
            value={formData.id}
            onChange={handleChange}
          />
        </div>
        <div className="input-label">
          <label>name:</label>
          <br />
          <input
            type="text "
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student name"
          />
        </div>
        <div className="input-label">
          <label>program:</label>
          <br />
          <input
            type="text"
            name="program"
            value={formData.program}
            onChange={handleChange}
            placeholder="Enter student program"
          />
        </div>
        <div className="btn">
          <button onClick={resetForm}>Reset</button>
          <button>Register</button>
        </div>
      </form>
      <AllStudents />
    </div>
  );
}
