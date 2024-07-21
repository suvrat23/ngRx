package com.demoApplication.demoApplication.repo;

import com.demoApplication.demoApplication.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepo extends JpaRepository<Users, Long> {

    Optional<Users> findUsersById(Long id);

    void deleteUsersById(Long id);

    Users findUsersByUsername(String username);
}


