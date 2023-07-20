import { RedisUserForCreation } from './RedisUserForCreation';


export class RedisCreateDbUserRequest {
    public users?: Array<RedisUserForCreation>;
    public constructor() { 
    }
    public withUsers(users: Array<RedisUserForCreation>): RedisCreateDbUserRequest {
        this['users'] = users;
        return this;
    }
}