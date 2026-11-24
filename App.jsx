
import React from "react";
import "./App.css";

// Header Component
function Header() {
  return (
    <h1>Student Management System</h1>
  );
}

// Student List Component
function StudentList() {

  const students = [
    { id: 1, name: "Charan", marks: 85 },
    { id: 2, name: "Vishwa", marks: 35 },
    { id: 3, name: "Ravi", marks: 65 }
  ];

  return (
    <div>
      <h2>Student Details</h2>

      {students.map((student) => (
        <div className="student" key={student.id}>
          <h3>Name: {student.name}</h3>
          <p>Marks: {student.marks}</p>

          <p>
            Result: {
              student.marks >= 40 ? "PASS" : "FAIL"
            }
          </p>
        </div>
      ))}
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <p>Student Management System © 2026</p>
    </footer>
  );
}

// Main Component
function App() {
  return (
    <div>
      <Header />
      <StudentList />
      <Footer />
    </div>
  );
}

export default App;
