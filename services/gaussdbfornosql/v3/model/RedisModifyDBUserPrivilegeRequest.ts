import { RedisModifyDbUserPrivilegeRequestBody } from './RedisModifyDbUserPrivilegeRequestBody';


export class RedisModifyDBUserPrivilegeRequest {
    public users?: Array<RedisModifyDbUserPrivilegeRequestBody>;
    public constructor() { 
    }
    public withUsers(users: Array<RedisModifyDbUserPrivilegeRequestBody>): RedisModifyDBUserPrivilegeRequest {
        this['users'] = users;
        return this;
    }
}