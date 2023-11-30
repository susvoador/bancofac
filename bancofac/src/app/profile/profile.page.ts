import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  profile = null; 

constructor(
  private avatarService: AvatarService, 
  private authService: AuthService,
  private router: Router, 
  private loadingController: LoadingController,
  private alertController: AlertController
) {}

async logout() { 
  this.authService.logout();
  this.router.navigateByUrl('/', {replaceUrl: true });
}

async changeImage() {}
}

