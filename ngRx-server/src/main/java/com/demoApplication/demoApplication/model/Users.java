package com.demoApplication.demoApplication.model;

import jakarta.persistence.*;

import java.io.Serializable;
@Entity
@Table(name="users")
public class Users implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private int gmin;
    private String company_name;
    private String email;
    public String first_name;
    private String last_name;
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    private String username;

    public Users() {}
    public Users(int gmin, String username,String company_name, String email, String first_name, String last_name, String password) {
        this.gmin = gmin;
        this.company_name = company_name;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public int getGmin() {
        return gmin;
    }

    public String getCompany_name() {
        return company_name;
    }

    public String getEmail() {
        return email;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public String getPassword() {
        return password;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setGmin(int gmin) {
        this.gmin = gmin;
    }

    public void setCompany_name(String company_name) {
        this.company_name = company_name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "users{" +
                "id=" + id +
                ", gmin=" + gmin +
                ", company_name='" + company_name + '\'' +
                ", email='" + email + '\'' +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

}
