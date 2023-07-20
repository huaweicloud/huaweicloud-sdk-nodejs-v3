import { GrantQueuePermissionReq } from './GrantQueuePermissionReq';


export class RegisterAuthorizedQueueRequest {
    public body?: GrantQueuePermissionReq;
    public constructor() { 
    }
    public withBody(body: GrantQueuePermissionReq): RegisterAuthorizedQueueRequest {
        this['body'] = body;
        return this;
    }
}