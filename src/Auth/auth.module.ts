import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthSchema } from "./auth.schema";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { jwtConstants } from './constants';



@Module({
    imports :[MongooseModule.forFeature([{name :'Auth',schema: AuthSchema}]), 
    JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),],
    controllers:[AuthController],
    providers : [AuthService]
})
export class AuthModule {}
