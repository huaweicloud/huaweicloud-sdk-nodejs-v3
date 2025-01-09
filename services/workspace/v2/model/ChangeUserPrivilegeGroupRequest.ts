import { ChangeUserPrivilegeGroupReq } from './ChangeUserPrivilegeGroupReq';


export class ChangeUserPrivilegeGroupRequest {
    public body?: ChangeUserPrivilegeGroupReq;
    public constructor() { 
    }
    public withBody(body: ChangeUserPrivilegeGroupReq): ChangeUserPrivilegeGroupRequest {
        this['body'] = body;
        return this;
    }
}