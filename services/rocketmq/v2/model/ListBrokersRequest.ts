

export class ListBrokersRequest {
    private 'instance_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListBrokersRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListBrokersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListBrokersRequest {
        this['offset'] = offset;
        return this;
    }
}