import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { AuthDto, LoginDto } from "./auth.dto";
import * as bcrypt from 'bcrypt'
import { Auth, AuthDocument } from "./auth.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { JwtService } from "@nestjs/jwt";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService{
    constructor(@InjectModel(Auth.name) private readonly userModel: Model<AuthDocument>,
                private jwtService : JwtService
    ) {}


    async register(user : AuthDto){
        const hashedPassword = await bcrypt.hash(user.password, 10);

        const createdUser = new this.userModel({
            ...user,
            password :hashedPassword,
        })

        await createdUser.save()
        return createdUser
    }

    async login(user : LoginDto){
        const loginUser = await this.userModel.findOne({email : user.email})

        if(!loginUser){
            throw new NotFoundException('User not found')
        }

        const password = await bcrypt.compare(user.password, loginUser.password);

        if (!password) {
            throw new UnauthorizedException('Invalid password');
          }
        const token = jwt.sign({ email : loginUser.email, name : loginUser.username }, 'your-secret-key', { expiresIn: '1h' });

        return {user : token}
    }
}