import { UserQosReqInfo } from './UserQosReqInfo';


export class RestQosRequestDTO {
    public users?: Array<UserQosReqInfo>;
    public constructor() { 
    }
    public withUsers(users: Array<UserQosReqInfo>): RestQosRequestDTO {
        this['users'] = users;
        return this;
    }
}