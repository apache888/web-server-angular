import { Component, OnInit } from '@angular/core';
import {DevService} from '../dev.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Developer} from '../dev';

@Component({
  selector: 'app-devs-edit',
  templateUrl: './devs-edit.component.html',
  styleUrls: ['./devs-edit.component.css']
})
export class DevsEditComponent implements OnInit {

  public developer;
  errorMessage: string;

  constructor(private devService: DevService, private route: ActivatedRoute, private router: Router) {
    this.developer = <Developer>{};
  }

  ngOnInit() {
    const devId = this.route.snapshot.params['id'];
    this.devService.getDevById(devId).subscribe(
      dev => this.developer = dev,
      error => this.errorMessage = <any> error);
  }

  onSubmit(dev) {
    // let that = this;
    this.devService.updateDev(dev.id, dev).subscribe(
      getResult,
      getError
    );

    function getError(error) {
      console.log(error);
      console.log('error catched');
      return this.errorMessage = <any> error;
    }

    function getResult(update_status) {
      console.log(update_status);
      if (update_status.status === 204) {
        console.log('update success');
        this.gotoDevDetail(dev);
      } else {
        return console.log('update failed');
      }
    }
  };

  gotoDevDetail(dev: Developer) {
    this.router.navigate(['/devs', dev.id]);
  }

}
