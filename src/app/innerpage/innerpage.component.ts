import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-innerpage',
  templateUrl: './innerpage.component.html',
  styleUrl: './innerpage.component.scss'
})
export class InnerpageComponent implements OnInit{
  constructor(private interact:InteractionService) { }
  ngOnInit(): void {
    // this.styleClass = 'body-trimmed'
    this.interact.sharedscreenWidth.subscribe(message => {this.collapsed=message});
    this.interact.screenSize$.subscribe(message => {this.screenWidth=message})
  }

  collapsed = false;
  screenWidth = 0;
  

  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.collapsed = data.collapsed
  }
   
  getBodyClass(): string {
    let styleClass= '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}
