import { Component, OnInit } from '@angular/core';
import { faBell, faBookReader, faChalkboardTeacher, faClose, faComment, faDashboard, faRulerVertical, faSearch, faSignOut, faToggleOff, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {


  icons={
    dashboardIcon:faDashboard,
    userIcon:faUserGraduate,
    // teacherIcon:faUser,
    teacherIcon:faChalkboardTeacher,
    rulerIcon:faRulerVertical,
    bookIcon:faBookReader,
    searchIcon:faSearch,
    commentIcon:faComment,
    signoutIcon:faSignOut,
    bellIcon:faBell,
    closeicon:faClose,

  }

  // maintain track of whether sidenav is open or close
  sidenavCollapse=true;
  cmpltnavCollapse=false;
  constructor() { }

  ngOnInit(): void {
  }

  // click():void{
  //   if(this.sidenavCollapse==true){
  //     var val=document.getElementById('#nav')
  //     val=
  //   }
  
    
}

