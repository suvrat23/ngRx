package com.demoApplication.demoApplication.repo;

import com.demoApplication.demoApplication.model.Parts;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PartsRepo extends JpaRepository<Parts, Long> {

    void deletePartsById(Long id);

    Optional<Parts> findPartsById(Long id);
}
