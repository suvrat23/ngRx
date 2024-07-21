package com.demoApplication.demoApplication.service;

import com.demoApplication.demoApplication.DTO.PartDTO;
import com.demoApplication.demoApplication.exception.UserNotFoundException;
import com.demoApplication.demoApplication.repo.PartsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demoApplication.demoApplication.model.Parts;

import java.time.OffsetDateTime;
import java.util.List;

@Service
public class part_service {
    private final PartsRepo partsRepo;
    @Autowired
    public part_service(PartsRepo partsRepo) {
        this.partsRepo = partsRepo;
    }

    public Parts addPart(PartDTO _parts) {

        OffsetDateTime dateTime = OffsetDateTime.now();
        Parts part = new Parts();
        part.setPart_description(_parts.getPart_description());
        part.setPart_name(_parts.getPart_name());
        part.setPart_type_code(_parts.getPart_type_code());
        part.setCreated_by(_parts.getCreated_by());
        part.setUpdated_by(_parts.getUpdated_by());
        part.setCreated_at(OffsetDateTime.parse(dateTime.toString()));
        part.setUpdated_at(OffsetDateTime.parse(dateTime.toString()));

        return partsRepo.save(part);

    }
    public List<Parts> findAllParts() {
        return partsRepo.findAll();
    }

    public Parts updateInfo(PartDTO _part, Long id) {
        OffsetDateTime dateTime = OffsetDateTime.now();
//        Parts part = new Parts();
        Parts existingPart = findPartsById(id);
        existingPart.setPart_description(_part.getPart_description());
        existingPart.setPart_name(_part.getPart_name());
        existingPart.setPart_type_code(_part.getPart_type_code());
        existingPart.setUpdated_by(_part.getUpdated_by());
        existingPart.setCreated_by(_part.getCreated_by());
        existingPart.setUpdated_at(dateTime);

        return partsRepo.save(existingPart);
    }

    public void deleteParts(Long id) {
        partsRepo.deleteById(id);
    }

    public Parts findPartsById(Long id) {
        return partsRepo.findPartsById(id).orElseThrow(()-> new UserNotFoundException("User by id "+id+" was not found."));
    }
}
