import { SecurityGroupRequest } from './SecurityGroupRequest';


export class UpdateAuditSecurityGroupRequest {
    public body?: SecurityGroupRequest;
    public constructor() { 
    }
    public withBody(body: SecurityGroupRequest): UpdateAuditSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}