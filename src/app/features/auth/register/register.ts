import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/users';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerForm! : FormGroup
  constructor(private fb : FormBuilder,
    private authservice: UserService
  ){
    this.registerForm = this.fb.group({
      name : ['',[Validators.required]],
      email : ['',[Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)] ]
    })
  }

  onSubmit():void{
    if (this.registerForm.invalid){
      alert('Enter Valid Details')
      return
    }

    this.authservice.register(this.registerForm.value).subscribe({
      next:(res:any)=>{
        // console.log(res)
        alert("Registration Successful")
        this.registerForm.reset()
      },
      error: (err) => {
      console.error(err);
      alert(err.error.detail || 'Registration Failed');
    }
    })
    
  }

}
