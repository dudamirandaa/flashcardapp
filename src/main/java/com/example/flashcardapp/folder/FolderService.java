package com.example.flashcardapp.folder;

import com.example.flashcardapp.model.Folder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FolderService {

    @Autowired
    private FolderRepository folderRepository;

    public Iterable<Folder> findAll() {
        return folderRepository.findAll();
    }

    public Optional<Folder> findFolder(Long id) {
        return folderRepository.findById(id);
    }

    public Folder save(Folder folder) {
        folderRepository.save(folder);
        return folder;
    }

    public void delete(Long id) {
        Optional<Folder> folder = folderRepository.findById(id);
        folder.ifPresent(folderRepository::delete);
    }
}
