import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin/admin.service';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatInputModule,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
})
export class DashboardPageComponent {
  categoryForm!: FormGroup;

  alertMessage: string = '';
  showAlert: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adminService: AdminService
  ) {}

  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  addCategory() {
    if (this.categoryForm.valid) {
      this.adminService
        .addCategory(this.categoryForm.value)
        .subscribe((response) => {
          if (response.id != null) {
            this.alertMessage = 'Category Added Successfully';
          }
        });
      this.router.navigateByUrl('/dashboard');
    } else {
      this.categoryForm.markAllAsTouched();
      this.alertMessage = 'Category Not Added';
    }
  }

  showAlertMessage() {
    // this.alertMessage = message;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }
}
