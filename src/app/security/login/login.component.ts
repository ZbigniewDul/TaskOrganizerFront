import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseWebAPIErrors } from 'src/app/utilities/utilis';
import { userCredentials } from '../security.models';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private securityService: SecurityService,
    private router: Router) { }

    errors: string[] = [];

  ngOnInit(): void {
  }

  login(userCredentials: userCredentials){
    this.errors = [];
    this.securityService.login(userCredentials).subscribe(authenticationResponse =>{
      this.securityService.saveToken(authenticationResponse);
      this.router.navigate(["/"]);
    }, error => this.errors = parseWebAPIErrors(error));
  }

}