import { IsNotEmpty, minLength } from "class-validator";

export class userDto {
    @IsNotEmpty()
    email: string; 

    @IsNotEmpty()
    username: string; 

    password: string 

 
}