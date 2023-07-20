

export class ListConfigHistoriesRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListConfigHistoriesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListConfigHistoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListConfigHistoriesRequest {
        this['limit'] = limit;
        return this;
    }
}