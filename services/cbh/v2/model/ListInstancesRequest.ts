

export class ListInstancesRequest {
    private 'instance_id'?: number;
    public limit?: string;
    public offset?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: number): ListInstancesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: string): ListInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListInstancesRequest {
        this['offset'] = offset;
        return this;
    }
}