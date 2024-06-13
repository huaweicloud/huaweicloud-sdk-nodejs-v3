import { BatchCreateSecurityGroupTagsRequestBody } from './BatchCreateSecurityGroupTagsRequestBody';


export class BatchCreateSecurityGroupTagsRequest {
    private 'security_group_id'?: string;
    public body?: BatchCreateSecurityGroupTagsRequestBody;
    public constructor(securityGroupId?: string) { 
        this['security_group_id'] = securityGroupId;
    }
    public withSecurityGroupId(securityGroupId: string): BatchCreateSecurityGroupTagsRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withBody(body: BatchCreateSecurityGroupTagsRequestBody): BatchCreateSecurityGroupTagsRequest {
        this['body'] = body;
        return this;
    }
}