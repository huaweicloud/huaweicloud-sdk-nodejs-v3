import { OpVpnUser } from './OpVpnUser';


export class BatchDeleteVpnUsersRequestBody {
    public users?: Array<OpVpnUser>;
    public constructor(users?: Array<OpVpnUser>) { 
        this['users'] = users;
    }
    public withUsers(users: Array<OpVpnUser>): BatchDeleteVpnUsersRequestBody {
        this['users'] = users;
        return this;
    }
}