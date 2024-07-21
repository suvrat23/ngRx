package com.demoApplication.demoApplication.Controller;

import com.demoApplication.demoApplication.DTO.PartDTO;
import com.demoApplication.demoApplication.model.Parts;
import com.demoApplication.demoApplication.service.part_service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.OffsetDateTime;
import java.util.List;
@RestController
@RequestMapping("/parts")
public class PartsController {
    private final part_service partService;

    public PartsController(part_service partService) {
        this.partService = partService;
    }

    @GetMapping("/all_part")
    public ResponseEntity<List<Parts>> getAllParts() {
        List<Parts> parts = partService.findAllParts();
        return new ResponseEntity<>(parts, HttpStatus.OK);
    }

    @GetMapping("/find_part/{id}")
    public ResponseEntity<Parts> getPartsById(@PathVariable("id") Long id) {
        Parts parts = partService.findPartsById(id);
        return new ResponseEntity<>(parts, HttpStatus.OK);
    }

    @PostMapping("/add_part")
    public ResponseEntity<Parts> addParts(@RequestBody PartDTO _parts) {
        Parts parts = partService.addPart(_parts);
        return new ResponseEntity<>(parts, HttpStatus.CREATED);
    }

    @PutMapping("/update_part/{id}")
    public ResponseEntity<Parts> updatePart(@PathVariable("id") Long id, @RequestBody PartDTO parts) {
        Parts  _parts = partService.updateInfo(parts, id);
        return new ResponseEntity<>(_parts, HttpStatus.OK);
    }

    @DeleteMapping("/delete_part/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        partService.deleteParts(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
