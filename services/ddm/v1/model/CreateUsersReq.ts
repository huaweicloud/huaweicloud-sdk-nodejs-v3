import { CreateUsersInfo } from './CreateUsersInfo';


export class CreateUsersReq {
    public users?: Array<CreateUsersInfo>;
    public constructor(users?: Array<CreateUsersInfo>) { 
        this['users'] = users;
    }
    public withUsers(users: Array<CreateUsersInfo>): CreateUsersReq {
        this['users'] = users;
        return this;
    }
}