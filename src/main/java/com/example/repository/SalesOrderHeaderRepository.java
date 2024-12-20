package com.example.repository;

import com.example.model.SalesOrderHeader;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalesOrderHeaderRepository extends JpaRepository<SalesOrderHeader, Integer> {
}
