import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users/users.service';

@Injectable()
export class AuthService {
    constructor(private UserService: UsersService){}

    validateUser(username:string, password: string ){
        const user = this.UserService.findUser(username)

        if(user && user.password == password){
            return user ; 
        }else {
            return null 
        }
    }
}
