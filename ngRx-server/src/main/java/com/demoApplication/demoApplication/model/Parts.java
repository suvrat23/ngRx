package com.demoApplication.demoApplication.model;

import jakarta.persistence.*;

import java.io.Serializable;


import java.time.OffsetDateTime;



@Entity
@Table(name = "parts")
public class Parts implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "part_id")
    private Long id;
    private OffsetDateTime  created_at;
    @Column(nullable = false)
    private String created_by;
    @Column(nullable = false)
    private String part_description;
    @Column(nullable = false)
    private String part_name;
    @Column(nullable = false)
    private String part_type_code;
    private OffsetDateTime  updated_at;
    @Column(nullable = false)
    private String updated_by;

    public Parts(OffsetDateTime  created_at, String created_by, String part_description,
                 String part_name, String part_type_code, OffsetDateTime  updated_at, String updated_by) {
        this.created_at = created_at;
        this.created_by = created_by;
        this.part_description = part_description;
        this.part_name = part_name;
        this.part_type_code = part_type_code;
        this.updated_at = updated_at;
        this.updated_by = updated_by;
    }

    public Parts() {

    }

    // getters
    public Long getId() {
        return id;
    }
    public String getCreated_by() {
        return created_by;
    }
    public OffsetDateTime  getCreated_at() {
        return created_at;
    }
    public OffsetDateTime  getUpdated_at() {
        return updated_at;
    }
    public String getPart_description() {
        return part_description;
    }

    public String getPart_name() {
        return part_name;
    }

    public String getPart_type_code() {
        return part_type_code;
    }

    public String getUpdated_by() {
        return updated_by;
    }

    // setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setCreated_by(String user) {
        this.created_by = user;
    }

        public void setCreated_at(OffsetDateTime  created_at) {
        this.created_at = created_at;
    }

    public void setUpdated_at(OffsetDateTime  updated_at) {
        this.updated_at = updated_at;
    }

    public void setPart_description(String part_description) {
        this.part_description = part_description;
    }

    public void setPart_name(String part_name) {
        this.part_name = part_name;
    }

    public void setPart_type_code(String part_type_code) {
        this.part_type_code = part_type_code;
    }

    public void setUpdated_by(String user) {
        this.updated_by = user;
    }

    @Override
    public String toString() {
        return "parts{" +
                "partdId=" + id +
                ", created_at='" + created_at + '\'' +
                ", created_by='" + created_by + '\'' +
                ", part_description='" + part_description + '\'' +
                ", part_name='" + part_name + '\'' +
                ", part_type_code='" + part_type_code + '\'' +
                ", updated_at='" + updated_at + '\'' +
                ", updated_by='" + updated_by + '\'' +
                '}';
    }

}
