import { CreateUserOption } from './CreateUserOption';


export class CreateUserRequestBody {
    public user: CreateUserOption;
    public constructor(user?: any) { 
        this['user'] = user;
    }
    public withUser(user: CreateUserOption): CreateUserRequestBody {
        this['user'] = user;
        return this;
    }
}