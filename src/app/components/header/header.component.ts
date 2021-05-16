import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showcolor: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService,private router:Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showcolor = value));
  }

  ngOnInit(): void {}

  clickeBtn() {
    this.uiService.toggleAddShow();
  }

  hasRoute(route:string){
    return this.router.url === route
  }
}
