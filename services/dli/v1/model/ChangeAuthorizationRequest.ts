import { GrantDataPermissionReq } from './GrantDataPermissionReq';


export class ChangeAuthorizationRequest {
    public body?: GrantDataPermissionReq;
    public constructor() { 
    }
    public withBody(body: GrantDataPermissionReq): ChangeAuthorizationRequest {
        this['body'] = body;
        return this;
    }
}