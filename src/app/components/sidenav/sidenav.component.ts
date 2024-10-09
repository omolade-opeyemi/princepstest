import { Component, OnInit, HostListener } from '@angular/core';
import { navbarData } from '../../models/nav-data';
import { InteractionService } from '../../services/interaction.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  host: { class: 'd-block' },

})
export class SidenavComponent implements OnInit{

  collapsed:any;
  screenWidth = 770;
  navData = navbarData;

  constructor(private interaction: InteractionService) { }
  @HostListener('window:resize', ['$event'])

  onResize() {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
    }else{
      this.collapsed = true;
    }
    this.interaction.getscreenWidth(this.collapsed)
    this.interaction.getscreenSize(this.screenWidth)
  }

  ngOnInit(): void {
    this.interaction.getscreenWidth(this.collapsed);
    this.interaction.getscreenSize(this.screenWidth);
    this.onResize()
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.interaction.getscreenWidth(this.collapsed)
    this.interaction.getscreenSize(this.screenWidth)
      }

  closeSidenav(): void {
    this.collapsed = false;
    this.interaction.getscreenWidth(this.collapsed);
    this.interaction.getscreenSize(this.screenWidth);
  }

}
