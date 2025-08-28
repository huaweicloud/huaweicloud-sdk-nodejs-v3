

export class ShowLogicalProcessesRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public keyword?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowLogicalProcessesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ShowLogicalProcessesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowLogicalProcessesRequest {
        this['limit'] = limit;
        return this;
    }
    public withKeyword(keyword: string): ShowLogicalProcessesRequest {
        this['keyword'] = keyword;
        return this;
    }
}