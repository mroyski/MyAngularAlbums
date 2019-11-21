import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { ALBUMS } from '../albums.data';
import { AlbumService } from '../shared/album.service';

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
    albumsArray: Album[];
    getAlbums() {
        this.albumsArray = this.albumService.getAlbums();
    }
    constructor(private albumService: AlbumService) {}

    ngOnInit(): void {
        this.albumsArray = this.albumsArray = ALBUMS;
    }
    parentFunctionHandler(album) {
        alert(
            'Album ' +
                album.albumName +
                ' was sent from the album card component'
        );
    }
}
