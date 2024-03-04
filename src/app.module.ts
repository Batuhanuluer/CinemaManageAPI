import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './Ticket/ticket.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './Auth/auth.module';

@Module({
  imports: [AuthModule,TicketModule,MongooseModule.forRoot('mongodb+srv://dbUser:IY68ItMvmiTAX8LT@cluster0.ecrv26d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
