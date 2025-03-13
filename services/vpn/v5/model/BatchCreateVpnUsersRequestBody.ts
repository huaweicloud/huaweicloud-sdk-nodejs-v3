import { CreateVpnUser } from './CreateVpnUser';


export class BatchCreateVpnUsersRequestBody {
    public users?: Array<CreateVpnUser>;
    public constructor(users?: Array<CreateVpnUser>) { 
        this['users'] = users;
    }
    public withUsers(users: Array<CreateVpnUser>): BatchCreateVpnUsersRequestBody {
        this['users'] = users;
        return this;
    }
}