import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/users';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm!: FormGroup

  constructor(private fb: FormBuilder,
    private authService: UserService,
    private router: Router
  ){
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]]
    })
  }

  onSubmit():void{
    if(this.loginForm.invalid){
      alert('Enter valid Credentials')
      return
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (res: any)=>{
        // console.log(res)

        localStorage.setItem("token",res.access_token)


         alert('Login Successful');

         this.router.navigate(['/dashboard'])
      },

    error: (error) => {
      console.error(error);
      alert(error.error.detail || 'Login Failed');
    }
    
    })
  
  }

}
