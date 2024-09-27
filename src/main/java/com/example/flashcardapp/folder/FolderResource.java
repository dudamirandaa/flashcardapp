package com.example.flashcardapp.folder;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FolderResource {

    @GetMapping("/hi")
    public String hello() {
        return "hiii";
    }
}
