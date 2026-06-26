import { useEffect, useState } from "react";
import { getAllStudents } from "../services/StudentService";
import "./StudentList.css"
function StudentList({students,onDelete,onEdit}) {

    
    return (
        <div className="table_content">
            <h2>Student List</h2>

            <table border="1" className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.course}</td>
                            <td>
                <button
                    onClick={() => onEdit(student)}
                >
                    Edit
                </button>

                <button
                    onClick={() => onDelete(student.id)}
                >
                    Delete
                </button>
            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;