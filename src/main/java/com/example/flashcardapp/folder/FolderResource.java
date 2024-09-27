package com.example.flashcardapp.folder;

import com.example.flashcardapp.model.Folder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/folders")
public class FolderResource {

    @Autowired
    private FolderService folderService;

    @GetMapping("/hi")
    public String hello() {
        return "hiii";
    }

    @GetMapping
    public Iterable<Folder> getAll() {
        return folderService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Folder> getFolder(@PathVariable Long id) {
        return folderService.findFolder(id);
    }

    @PostMapping
    public Folder newFolder(@RequestBody Folder newFolder) {
        return folderService.save(newFolder);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        folderService.delete(id);
    }
}
