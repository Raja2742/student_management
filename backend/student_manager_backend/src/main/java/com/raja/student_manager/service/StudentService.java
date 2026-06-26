package com.raja.student_manager.service;

import com.raja.student_manager.entity.StudentEntity;
import com.raja.student_manager.repository.StudentRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<StudentEntity> printAll(){
       return studentRepository.findAll();
    }

    public StudentEntity findById(long id){
        return studentRepository.findById(id)
                .orElseThrow(()->new RuntimeException("Student not found"));
    }

    public StudentEntity save(StudentEntity student){
        return studentRepository.save(student);

    }

    public StudentEntity update(StudentEntity student,Long id){
        StudentEntity user=studentRepository.findById(id).get();
        user.setName(student.getName());
        user.setEmail(student.getEmail());
        user.setCourse(student.getCourse());
        return studentRepository.save(user);

    }

    public void delete(Long id){
        studentRepository.deleteById(id);

    }
}
