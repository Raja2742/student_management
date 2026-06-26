package com.raja.student_manager.repository;

import com.raja.student_manager.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends
        JpaRepository<StudentEntity,Long> {
}
