import { Component } from '@angular/core';
import { Album } from './albums/album.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    titleCounter = 1;
    title = 'My Angular Albums';
    albumsArray: Album[];
}
