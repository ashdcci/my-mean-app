import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {AlertService} from '../alert.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService,AlertService]
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService,private router: Router,private alertService: AlertService,private route: ActivatedRoute) {}
  model: any = {};
    loading = false;
    returnUrl: string;
    ngOnInit() {
        // reset login status
        this.LoginService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
  login() {
    this.LoginService.login(this.model.username,this.model.password).subscribe(data =>{
      this.router.navigate([this.returnUrl]);
    },error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
  }

}
