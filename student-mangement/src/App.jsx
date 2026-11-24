
import React from "react";
import "./App.css";

// Header Component
function Header() {
  return (
    <header>
      <h1>Student Management System</h1>
      <p>Welcome to Student Portal</p>
    </header>
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
    <div className="container">
      <h2>Student Details</h2>

      {students.map((student) => (
        <div className="student" key={student.id}>
          <h3>{student.name}</h3>
          <p>Marks: {student.marks}</p>

          <p>
            Result:{" "}
            {student.marks >= 40 ? (
              <span className="pass">PASS</span>
            ) : (
              <span className="fail">FAIL</span>
            )}
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

// Main App Component
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
