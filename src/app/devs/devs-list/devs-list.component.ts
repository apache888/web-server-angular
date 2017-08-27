import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DevService} from '../dev.service';
import {Developer} from '../dev';
import 'rxjs/Rx';

@Component({
  selector: 'app-devs-list',
  templateUrl: './devs-list.component.html',
  styleUrls: ['./devs-list.component.css']
})
export class DevsListComponent implements OnInit {

  errorMessage: string;
  devs: Developer[];

  constructor(private router: Router, private devService: DevService) { }

  ngOnInit() {
    this.devService.getDevs()
      .subscribe(devs => this.devs = devs,
                 error => {this.router.navigate(['/login']);
                          this.errorMessage = <any> error});
  }

  onSelect(dev: Developer) {
    this.router.navigate(['/devs', dev.id]);
  }

  addDeveloper() {
    this.router.navigate(['/devs/add']);
  }

}
