package com.raja.student_manager.controller;

import com.raja.student_manager.entity.StudentEntity;
import com.raja.student_manager.service.StudentService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/student")
@RestController
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }


    @GetMapping
    public List<StudentEntity> printAll(){
        return studentService.printAll();
    }

    @GetMapping("/{id}")
    public StudentEntity findById(@PathVariable long id){
        return studentService.findById(id);
    }

    @PostMapping
    public StudentEntity save(@RequestBody StudentEntity student){
        return studentService.save(student);

    }

    @PutMapping("/{id}")
    public StudentEntity update(
            @RequestBody StudentEntity student,
            @PathVariable Long id){

        return studentService.update(student,id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id){
        studentService.delete(id);
        return "succesfully deleted";

    }
}
