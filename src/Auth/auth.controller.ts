import { Body, Controller, Post } from "@nestjs/common";
import { AuthDto, LoginDto } from "./auth.dto";
import { AuthService } from "./auth.service";


@Controller('user')
export class AuthController {
    constructor(private readonly authService : AuthService){}

    @Post('register')
    register(
        @Body('email') userEmail : string,
        @Body('username') name : string,
        @Body('password') userPassword : string,
    ){
        const newUser : AuthDto = {
            email : userEmail,
            username : name,
            password : userPassword,
        }

        return this.authService.register(newUser)
    }

    @Post('login')
    login(
        @Body('email') userEmail : string, 
        @Body('password') userPassword : string,
    ){
        const loginUser : LoginDto = {
            email: userEmail,
            password : userPassword,
        }

        return this.authService.login(loginUser)
    }
}