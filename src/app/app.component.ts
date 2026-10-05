import { Component } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
@Component({
 selector: 'app-root',
 standalone: true,
 imports: [ FaceSnapComponent],
 templateUrl: './app.component.html',
 styleUrl: './app.component.scss'
})
export class AppComponent {
 elements= [
 {title : 'Archibald',
 description : 'Mon meilleur ami depuis toujours !',
 createdAt : new Date(),
 snaps : 5,
 imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddybear-792273_1280.jpg',
 location : "Sfax"},
{title : 'Archibald2',
 description : 'Mon meilleur ami 3 !',
 createdAt : new Date(),
 snaps : 150,
 imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddybear-792273_1280.jpg'}
]
} 
