import { PwdPasswordUser } from './PwdPasswordUser';


export class PwdPassword {
    public user?: PwdPasswordUser;
    public constructor(user?: PwdPasswordUser) { 
        this['user'] = user;
    }
    public withUser(user: PwdPasswordUser): PwdPassword {
        this['user'] = user;
        return this;
    }
}