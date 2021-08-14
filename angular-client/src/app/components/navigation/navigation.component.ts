import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../_helpers/storage/storage.service";
import {LOGIN_PATH,REGISTER_PATH,LOGOUT_PATH} from "../../_helpers/paths";

@Component({
  selector: '#site-header',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})


export class NavigationComponent implements OnInit {
  loginPath?: string;
  registerPath?: string;
  logoutPath?: string;
  username? :string | null

  constructor(private storageService : StorageService) {
  }

  ngOnInit(): void {
    this.loginPath = LOGOUT_PATH;
    this.registerPath = REGISTER_PATH;
    this.loginPath = LOGOUT_PATH;
    this.username = this.storageService.getUsername();
  }

  reloadPage(): void {
    window.location.reload();
  }

}


