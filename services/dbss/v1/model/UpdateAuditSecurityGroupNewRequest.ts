import { SecurityGroupRequest } from './SecurityGroupRequest';


export class UpdateAuditSecurityGroupNewRequest {
    public body?: SecurityGroupRequest;
    public constructor() { 
    }
    public withBody(body: SecurityGroupRequest): UpdateAuditSecurityGroupNewRequest {
        this['body'] = body;
        return this;
    }
}