import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private readonly users  = [
        {
            username: "ehllo", 
            password: "angularmaterial"
        }
    ]

    findUser(username:string) {
        return this.users.find((user)  => user.username === username)
    }
}
