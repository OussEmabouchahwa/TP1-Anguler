import { Component, Input} from '@angular/core';

import { NgClass, NgStyle, UpperCasePipe,TitleCasePipe ,LowerCasePipe ,DatePipe} from '@angular/common';

@Component({
 selector: 'app-face-snap',
 standalone: true,
 imports: [NgStyle , NgClass,UpperCasePipe,TitleCasePipe,LowerCasePipe,DatePipe],
 templateUrl: './face-snap.component.html',
 styleUrl: './face-snap.component.scss'
 
})
export class FaceSnapComponent {
 @Input() title!: string;
 @Input() description!: string;
 @Input() createdAt!: Date;
 @Input() snaps!: number;
 @Input() imageUrl!: string;
 @Input() location?: string;

 

 buttonText!: string;
 ngOnInit() {
 this.buttonText = 'Oh Snap !';
 }onSnap() {
 if (this.buttonText === 'Oh Snap!') {
 this.snaps++;
 this.buttonText = 'Oops, unSnap!';
 } else {
 this.snaps--;
 this.buttonText = 'Oh Snap!';
 }
 }
}