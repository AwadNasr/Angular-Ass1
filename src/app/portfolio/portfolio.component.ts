import { Images } from './../images';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  images:Images[]=[
    {imageSrc:'./assets/cabin.png',disc:'This is Pic 1'},
    {imageSrc:'./assets/cake.png',disc:'This is Pic 2'},
    {imageSrc:'./assets/circus.png',disc:'This is Pic 3'},
    {imageSrc:'./assets/game.png',disc:'This is Pic 4'},
    {imageSrc:'./assets/safe.png',disc:'This is Pic 5'},
    {imageSrc:'./assets/submarine.png',disc:'This is Pic 6'},
  ]
  imageModal:any={}
  showImage(data:any){
    this.imageModal=data;
  }
}
