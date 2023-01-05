import { Component, OnInit } from '@angular/core';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Medium } from '../shared/interfaces/medium.interface';
import { MediumService } from './medium.service';
//import { MediumService } from '../medium.service';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})
export class MediumComponent implements OnInit {

  // icons={
  //   likeIcon:faHeart,
  //   commentIcon:faComment,
  // }

  constructor() { }

  blogsData!:Medium[];

  ngOnInit(): void {
   
  }

}
