import {Component, OnInit} from '@angular/core';
import {CvServiceService} from '../service/cv-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routeToGo: string;

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  goTo() {
    this.route.navigate([this.routeToGo]);
  }


}
