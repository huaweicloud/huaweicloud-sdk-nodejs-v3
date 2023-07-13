import { LoginTokenUser } from './LoginTokenUser';


export class LoginTokenAssumedBy {
    public user?: LoginTokenUser;
    public constructor() { 
    }
    public withUser(user: LoginTokenUser): LoginTokenAssumedBy {
        this['user'] = user;
        return this;
    }
}