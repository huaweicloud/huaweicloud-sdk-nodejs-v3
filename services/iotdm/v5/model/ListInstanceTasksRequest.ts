

export class ListInstanceTasksRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public marker?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInstanceTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListInstanceTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListInstanceTasksRequest {
        this['marker'] = marker;
        return this;
    }
}