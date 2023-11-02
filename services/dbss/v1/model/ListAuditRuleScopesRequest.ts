

export class ListAuditRuleScopesRequest {
    private 'instance_id'?: string;
    public offset?: string;
    public limit?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListAuditRuleScopesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: string): ListAuditRuleScopesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListAuditRuleScopesRequest {
        this['limit'] = limit;
        return this;
    }
}