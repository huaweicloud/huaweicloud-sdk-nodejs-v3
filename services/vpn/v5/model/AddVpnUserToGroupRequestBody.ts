import { OpVpnUser } from './OpVpnUser';


export class AddVpnUserToGroupRequestBody {
    public users?: Array<OpVpnUser>;
    public constructor(users?: Array<OpVpnUser>) { 
        this['users'] = users;
    }
    public withUsers(users: Array<OpVpnUser>): AddVpnUserToGroupRequestBody {
        this['users'] = users;
        return this;
    }
}