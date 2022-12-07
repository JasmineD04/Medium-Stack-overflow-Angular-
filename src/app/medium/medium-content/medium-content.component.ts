import { Component, OnInit } from '@angular/core';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-medium-content',
  templateUrl: './medium-content.component.html',
  styleUrls: ['./medium-content.component.css']
})
export class MediumContentComponent implements OnInit {

  icons={
    likeIcon:faHeart,
    commentIcon:faComment,
  }


  constructor() { }

  ngOnInit(): void {
  }

}
