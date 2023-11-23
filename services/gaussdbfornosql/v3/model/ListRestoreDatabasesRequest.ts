

export class ListRestoreDatabasesRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListRestoreDatabasesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListRestoreDatabasesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRestoreDatabasesRequest {
        this['limit'] = limit;
        return this;
    }
}