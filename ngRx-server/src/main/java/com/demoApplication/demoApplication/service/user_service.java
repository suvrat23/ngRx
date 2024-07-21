package com.demoApplication.demoApplication.service;

import com.demoApplication.demoApplication.exception.UserAlreadyExistsException;
import com.demoApplication.demoApplication.exception.UserNotFoundException;
import com.demoApplication.demoApplication.model.Users;
import com.demoApplication.demoApplication.repo.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class user_service {
    private final UsersRepo user;

    @Autowired
    public user_service(UsersRepo user) {
        this.user = user;
    }

    public Users addUser(Users _user) {
        if (user.findUsersByUsername(_user.getUsername()) != null) {
            throw new UserAlreadyExistsException("Username is already taken");
        }
        return user.save(_user);
    }

    public List<Users> findAllUsers() {
        return user.findAll();
    }
    public Users loginUser(String username, String password) {
        Users users = user.findUsersByUsername(username);
        if (users == null || !users.getPassword().equals(password)) {
            throw new UserNotFoundException("Invalid username or password");
        }
        return users;
    }

    public Users updateInfo(Users _user, Long id) {
        Users existingUser = findUserById(id);
        existingUser.setEmail(_user.getEmail());
        existingUser.setGmin(_user.getGmin());
        existingUser.setCompany_name(_user.getCompany_name());
        existingUser.setFirst_name(_user.getFirst_name());
        existingUser.setLast_name(_user.getLast_name());
        existingUser.setPassword(_user.getPassword());
        return user.save(existingUser);
    }

    public void deleteUser(Long id) {

        user.deleteById(id);
    }
    public Users findUserById(Long id) {
        return user.findUsersById(id).orElseThrow(()-> new UserNotFoundException("User by id "+id+" was not found."));
    }
 }
