

export class ListAuditLogsRequest {
    public operation?: string;
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(operation?: string, instanceId?: string) { 
        this['operation'] = operation;
        this['instance_id'] = instanceId;
    }
    public withOperation(operation: string): ListAuditLogsRequest {
        this['operation'] = operation;
        return this;
    }
    public withInstanceId(instanceId: string): ListAuditLogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListAuditLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAuditLogsRequest {
        this['limit'] = limit;
        return this;
    }
}