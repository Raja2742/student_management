import { useEffect, useState } from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import { getAllStudents,updateStudent,deleteStudent } from "./services/StudentService";
import "./App.css";

function App() {
  

    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const fetchStudents = async () => {
        try {
            const response = await getAllStudents();
            setStudents(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleDelete = async (id) => {
    try {
        await deleteStudent(id);
        fetchStudents(); // Refresh the table
    } catch (error) {
        console.error(error);
    }
    };

    const handleEdit = (student) => {
    setSelectedStudent(student);
    };

    return (
        <div className="body">
            <h1>Student Management System</h1>

          <div className="main">
            <AddStudent
          selectedStudent={selectedStudent}
          setSelectedStudent={setSelectedStudent}
          onStudentAdded={fetchStudents}
         />

      <StudentList
          students={students}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
          </div>
        </div>
    );
}

export default App;