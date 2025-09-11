

export class ListAuditRuleScopesNewRequest {
    private 'instance_id'?: string;
    public offset?: string;
    public limit?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListAuditRuleScopesNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: string): ListAuditRuleScopesNewRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListAuditRuleScopesNewRequest {
        this['limit'] = limit;
        return this;
    }
}