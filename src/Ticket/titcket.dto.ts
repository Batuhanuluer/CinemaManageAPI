import { IsEmail, IsNotEmpty, } from 'class-validator';


export class TicketDto{
    @IsNotEmpty()
    movieName : string;

    @IsNotEmpty()
    movieTime : string;

    @IsNotEmpty()
    name : string;

}