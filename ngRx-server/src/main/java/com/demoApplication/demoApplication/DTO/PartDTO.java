package com.demoApplication.demoApplication.DTO;

import com.demoApplication.demoApplication.model.Parts;

import java.time.OffsetDateTime;
public class PartDTO {
    public String getCreated_by() {
        return created_by;
    }

    public void setCreated_by(String created_by) {
        this.created_by = created_by;
    }

    public String getPart_description() {
        return part_description;
    }

    public void setPart_description(String part_description) {
        this.part_description = part_description;
    }

    public String getPart_name() {
        return part_name;
    }

    public void setPart_name(String part_name) {
        this.part_name = part_name;
    }

    public String getPart_type_code() {
        return part_type_code;
    }

    public void setPart_type_code(String part_type_code) {
        this.part_type_code = part_type_code;
    }

    public String getUpdated_by() {
        return updated_by;
    }

    public void setUpdated_by(String updated_by) {
        this.updated_by = updated_by;
    }
    private String created_by;
    private String part_description;
    private String part_name;
    private String part_type_code;
    private String updated_by;

    public PartDTO(String created_by, String part_description, String part_name, String part_type_code, String updated_by) {
        this.created_by = created_by;
        this.part_description = part_description;
        this.part_name = part_name;
        this.part_type_code = part_type_code;
        this.updated_by = updated_by;
    }

    public PartDTO(Parts part) {
        this.created_by = part.getCreated_by();
        this.part_description = part.getPart_description();
        this.part_name = part.getPart_name();
        this.part_type_code = part.getPart_type_code();
        this.updated_by = part.getUpdated_by();
    }
}
