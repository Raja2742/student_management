import { useState,useEffect } from "react";
import { addStudent,updateStudent } from "../services/StudentService";
import StudentList from "./StudentList";
import "./AddStudent.css"
function AddStudent({ onStudentAdded,selectedStudent,setSelectedStudent }) {

    const [student, setStudent] = useState({
        name: "",
        email: "",
        course: ""
    });

    useEffect(() => {

    if (selectedStudent) {
        setStudent(selectedStudent);
    }

}, [selectedStudent]);

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (student.id) {
            await updateStudent(student.id, student);
            alert("Student Updated Successfully");
        } else {
            await addStudent(student);
            alert("Student Added Successfully");
        }

            setStudent({
                name: "",
                email: "",
                course: ""
            });

            setSelectedStudent(null);

            onStudentAdded();
            
        } catch (error) {
            console.error(error);
        }
        
    };

    return (
        <div className="form_content">
            <h2>Add Student</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={student.name}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={student.email}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="course"
                    placeholder="Enter Course"
                    value={student.course}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Save Student
                </button>

            </form>
        </div>
    );
}

export default AddStudent;