import { IsEmail, IsNotEmpty } from "class-validator";


export class AuthDto {
    @IsNotEmpty()
    @IsEmail()
    email : string

    @IsNotEmpty()
    username : string 

    @IsNotEmpty()
    password : string
}

export class LoginDto { 
    @IsNotEmpty()
    @IsEmail()
    email : string

    @IsNotEmpty()
    password : string
}