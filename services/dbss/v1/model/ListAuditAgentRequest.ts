

export class ListAuditAgentRequest {
    private 'instance_id'?: string;
    private 'db_id'?: string;
    public offset?: string;
    public limit?: string;
    public constructor(instanceId?: string, dbId?: string) { 
        this['instance_id'] = instanceId;
        this['db_id'] = dbId;
    }
    public withInstanceId(instanceId: string): ListAuditAgentRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbId(dbId: string): ListAuditAgentRequest {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withOffset(offset: string): ListAuditAgentRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListAuditAgentRequest {
        this['limit'] = limit;
        return this;
    }
}