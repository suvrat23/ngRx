package com.demoApplication.demoApplication.Controller;

import com.demoApplication.demoApplication.model.Users;
import com.demoApplication.demoApplication.service.user_service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {
    private final user_service service;

    public UsersController(user_service service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Users>> getAllUsers() {
        List<Users> users = service.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    @GetMapping("/login/{username}/{password}")
    public ResponseEntity<Users> getLoginInfo(@PathVariable("username") String username, @PathVariable("password") String password) {
        Users user = service.loginUser(username, password);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Users> getUsersById(@PathVariable("id") Long id) {
        Users users = service.findUserById(id);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Users> addUser(@RequestBody Users user) {
        Users _user = service.addUser(user);
        return new ResponseEntity<>(_user, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Users> updateUser(@PathVariable("id") Long id, @RequestBody Users user) {
        Users _user = service.updateInfo(user, id);
        return new ResponseEntity<>(_user, HttpStatus.OK);
    }

    @PutMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        service.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
