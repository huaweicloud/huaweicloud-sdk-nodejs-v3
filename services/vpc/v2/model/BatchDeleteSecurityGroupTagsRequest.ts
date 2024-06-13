import { BatchDeleteSecurityGroupTagsRequestBody } from './BatchDeleteSecurityGroupTagsRequestBody';


export class BatchDeleteSecurityGroupTagsRequest {
    private 'security_group_id'?: string;
    public body?: BatchDeleteSecurityGroupTagsRequestBody;
    public constructor(securityGroupId?: string) { 
        this['security_group_id'] = securityGroupId;
    }
    public withSecurityGroupId(securityGroupId: string): BatchDeleteSecurityGroupTagsRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withBody(body: BatchDeleteSecurityGroupTagsRequestBody): BatchDeleteSecurityGroupTagsRequest {
        this['body'] = body;
        return this;
    }
}