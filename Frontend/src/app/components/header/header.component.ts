import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';
import { UserStorageService } from '../../services/storage/user-storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  userResgistrationForm!: FormGroup;
  userLoginForm!: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  alertMessage: string = '';
  showAlert: boolean = false;

  isUserLoggedIn: boolean = UserStorageService.isUserLoggedIn();
  isAdminLoggedIn: boolean = UserStorageService.isAdminLoggedIn();

  @ViewChild('LoginForm') loginForm: ElementRef;
  @ViewChild('SignupForm') signupForm: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userResgistrationForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      mobile: [null, [Validators.required]],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
    });

    this.userLoginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });

    this.router.events.subscribe((event) => {
      this.isUserLoggedIn = UserStorageService.isUserLoggedIn();
      this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPasswordVisibility() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  showAlertMessage() {
    // this.alertMessage = message;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }

  onSubmitLogin() {
    const email = this.userLoginForm.get('email')!.value;
    const password = this.userLoginForm.get('password')!.value;

    this.authService.login(email, password).subscribe(
      (response) => {
        console.log('Login Successfull', response);
        this.alertMessage = 'Login Successfull';
        this.closeLoginModal();
        if (UserStorageService.isAdminLoggedIn()) {
          console.log('Admin Login');
          this.router.navigateByUrl('');
        } else if (UserStorageService.isUserLoggedIn()) {
          console.log('User Login');
          this.router.navigateByUrl('');
        }
      },
      (error) => {
        console.log('Login Unsuccessfull ' + error);
        this.alertMessage = 'Login Unuccessfull';
        window.alert('Login Failed');
      }
    );
  }

  onSubmitRegistration() {
    const password = this.userResgistrationForm.get('password')?.value;
    const confirmPassword =
      this.userResgistrationForm.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      console.log('Invalid Password');
      return;
    }

    this.authService.register(this.userResgistrationForm.value).subscribe(
      (response) => {
        console.log('Signup Successfull', response);
        this.alertMessage = 'Signup Successfull';
        this.closeSignUpModal();
        this.openModal();
      },
      (error) => {
        console.log('Signup Unsuccessfull ' + error);
        this.alertMessage = 'Signup Unuccessfull';
      }
    );
  }

  openModal(): void {
    const modalElement = this.loginForm.nativeElement as HTMLElement;
    modalElement.classList.add('show');
    modalElement.style.display = 'block';
    document.body.classList.add('modal-open');
    const backdropElement = document.createElement('div');
    backdropElement.classList.add('modal-backdrop', 'fade', 'show');
    document.body.appendChild(backdropElement);
  }

  closeLoginModal(): void {
    const modalElement = this.loginForm.nativeElement as HTMLElement;
    modalElement.classList.remove('show');
    modalElement.style.display = 'none';
    document.body.classList.remove('modal-open');
    const backdropElement = document.querySelector('.modal-backdrop');
    if (backdropElement) {
      backdropElement.remove();
    }
  }

  closeSignUpModal(): void {
    const modalElement = this.signupForm.nativeElement as HTMLElement;
    modalElement.classList.remove('show');
    modalElement.style.display = 'none';
    document.body.classList.remove('modal-open');
    const backdropElement = document.querySelector('.modal-backdrop');
    if (backdropElement) {
      backdropElement.remove();
    }
  }

  logOut() {
    UserStorageService.signOut();
    this.router.navigateByUrl('');
  }
}
