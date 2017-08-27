import { Component, OnInit } from '@angular/core';
import {Developer} from '../dev';
import {ActivatedRoute, Router} from '@angular/router';
import {DevService} from '../dev.service';

@Component({
  selector: 'app-devs-detail',
  templateUrl: './devs-detail.component.html',
  styleUrls: ['./devs-detail.component.css']
})
export class DevsDetailComponent implements OnInit {

  errorMessage: string;
  dev: Developer;

  constructor(private route: ActivatedRoute, private router: Router, private devService: DevService) {
    this.dev = <Developer>{};
  }

  ngOnInit() {
    const devId = this.route.snapshot.params['id'];
    this.devService.getDevById(devId).subscribe(
      developer => this.dev = developer,
      error => {this.router.navigate(['/login']);
        this.errorMessage = <any> error});
  }

  gotoDevsList() {
    this.router.navigate(['/devs']);
  }

  editDev() {
    this.router.navigate(['/devs', this.dev.id, 'edit']);
  }

  deleteDev(dev: Developer) {
    this.devService.deleteDev(dev.id.toString()).subscribe(
      () => this.gotoDevsList(),
      error => this.errorMessage = <any> error);
  }
}
