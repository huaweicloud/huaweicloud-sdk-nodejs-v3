import { UpdateUserOption } from './UpdateUserOption';


export class UpdateUserRequestBody {
    public user?: UpdateUserOption;
    public constructor(user?: UpdateUserOption) { 
        this['user'] = user;
    }
    public withUser(user: UpdateUserOption): UpdateUserRequestBody {
        this['user'] = user;
        return this;
    }
}