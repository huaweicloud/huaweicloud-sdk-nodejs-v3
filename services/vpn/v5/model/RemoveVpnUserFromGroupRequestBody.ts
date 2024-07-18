import { OpVpnUser } from './OpVpnUser';


export class RemoveVpnUserFromGroupRequestBody {
    public users?: Array<OpVpnUser>;
    public constructor(users?: Array<OpVpnUser>) { 
        this['users'] = users;
    }
    public withUsers(users: Array<OpVpnUser>): RemoveVpnUserFromGroupRequestBody {
        this['users'] = users;
        return this;
    }
}