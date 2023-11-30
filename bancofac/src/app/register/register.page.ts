import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  credentials!: FormGroup | any;  

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController, 
    private authService: AuthService,
    private router: Router    
    ) {}

    get email(){ 
      console.log(this.credentials);
      return this.credentials.get('email');
      
    }

    get password(){
      return this.credentials.get('password');
    }

    get confirmpassword(){
      return this.credentials.get('confirmpassword'); 
    }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }  
   
  async register() {
    
    const senha = this.credentials.value.password; 
    const confirmsenha = this.credentials.value.confirmpassword; 

    if(confirmsenha==senha) {

    

    const loading = await this.loadingController.create(); 
    await loading.present();

    const user = await this.authService.register(this.credentials.value);
    await loading.dismiss(); 
   
    
    
    if (user){ 
      this.router.navigateByUrl('/profile', { replaceUrl: true});
        } else{
      this.showAlert('Registro falhou', 'Por favor,tente novamente'); 
    }}
    else {
    this.showAlert('Alerta', 'as senhas não são iguais'); 
    }
  }
  async showAlert( header: string,  message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'], 
    });
    await alert.present();
  }

}
