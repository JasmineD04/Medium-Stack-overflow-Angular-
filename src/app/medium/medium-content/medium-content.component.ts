import { Component, OnInit } from '@angular/core';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Medium } from 'src/app/shared/interfaces/medium.interface';
import { MediumService } from '../medium.service';

@Component({
  selector: 'app-medium-content',
  templateUrl: './medium-content.component.html',
  styleUrls: ['./medium-content.component.css']
})
export class MediumContentComponent implements OnInit {
  
  blogsData!:Medium[];
  icons={
    likeIcon:faHeart,
    commentIcon:faComment,
  }


  constructor(private mediumService:MediumService) { }

  ngOnInit(): void {
    this.mediumService.fetchBlogs().subscribe((value:Medium[])=>{
      //console.warn(value);

      this.blogsData=value;
  });
  }
  

}
