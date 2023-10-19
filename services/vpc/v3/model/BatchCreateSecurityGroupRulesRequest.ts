import { BatchCreateSecurityGroupRulesRequestBody } from './BatchCreateSecurityGroupRulesRequestBody';


export class BatchCreateSecurityGroupRulesRequest {
    private 'security_group_id'?: string;
    public body?: BatchCreateSecurityGroupRulesRequestBody;
    public constructor(securityGroupId?: string) { 
        this['security_group_id'] = securityGroupId;
    }
    public withSecurityGroupId(securityGroupId: string): BatchCreateSecurityGroupRulesRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withBody(body: BatchCreateSecurityGroupRulesRequestBody): BatchCreateSecurityGroupRulesRequest {
        this['body'] = body;
        return this;
    }
}