import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private readonly users  = [
        {
            username: "hello", 
            password: "angularmaterial"
        }
    ]

    findUser(username:string) {
        return this.users.find((user)  => user.username === username)
    }
}
