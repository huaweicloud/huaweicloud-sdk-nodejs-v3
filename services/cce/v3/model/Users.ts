import { User } from './User';


export class Users {
    public name?: string;
    public user?: User;
    public constructor() { 
    }
    public withName(name: string): Users {
        this['name'] = name;
        return this;
    }
    public withUser(user: User): Users {
        this['user'] = user;
        return this;
    }
}