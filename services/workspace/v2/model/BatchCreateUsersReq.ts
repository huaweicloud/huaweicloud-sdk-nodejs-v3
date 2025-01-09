import { CreateUserRequest } from './CreateUserRequest';


export class BatchCreateUsersReq {
    public users?: Array<CreateUserRequest>;
    public constructor(users?: Array<CreateUserRequest>) { 
        this['users'] = users;
    }
    public withUsers(users: Array<CreateUserRequest>): BatchCreateUsersReq {
        this['users'] = users;
        return this;
    }
}