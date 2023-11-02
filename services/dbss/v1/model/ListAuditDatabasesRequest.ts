

export class ListAuditDatabasesRequest {
    private 'instance_id'?: string;
    public status?: string;
    public offset?: string;
    public limit?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListAuditDatabasesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: string): ListAuditDatabasesRequest {
        this['status'] = status;
        return this;
    }
    public withOffset(offset: string): ListAuditDatabasesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListAuditDatabasesRequest {
        this['limit'] = limit;
        return this;
    }
}