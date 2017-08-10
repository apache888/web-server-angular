import { Component, OnInit } from '@angular/core';
import {Developer} from '../dev';
import {Router} from '@angular/router';
import {DevService} from '../dev.service';
/**
 * Component to add Developer into db
 */
@Component({
  selector: 'app-devs-add',
  templateUrl: './devs-add.component.html',
  styleUrls: ['./devs-add.component.css']
})
export class DevsAddComponent implements OnInit {

  dev: Developer;
  errorMessage: string;

  constructor(private devService: DevService, private router: Router) {
    this.dev = <Developer>{};
  }

  ngOnInit() {
  }

  onSubmit(dev: Developer) {
    dev.id = null;
    this.devService.addDev(dev).subscribe(
      newDev => {
        this.dev = newDev;
        this.gotoDevsList();
      },
      error => this.errorMessage = <any> error
    );
  }

  gotoDevsList() {
    this.router.navigate(['/devs']);
  }

}
