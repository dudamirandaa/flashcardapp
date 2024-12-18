import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Folder } from "./model/folder";
import { AddFolderDTO } from "./model/add-folder-dto";

// This class handles calls to the backend server made for the path /folders
@Injectable({
    providedIn: 'root'
})
export class FolderService {

    constructor(private http: HttpClient) {}

    getFolders() {
        return this.http.get<Folder[]>('/api/folders');
    }

    addFolder(newFolder: AddFolderDTO) {
        this.http.post<Folder>('/api/folders', newFolder).subscribe(() => {
            window.location.reload();
          });
    }
}