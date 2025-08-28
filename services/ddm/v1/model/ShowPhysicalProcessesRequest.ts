

export class ShowPhysicalProcessesRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public keyword?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowPhysicalProcessesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ShowPhysicalProcessesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowPhysicalProcessesRequest {
        this['limit'] = limit;
        return this;
    }
    public withKeyword(keyword: string): ShowPhysicalProcessesRequest {
        this['keyword'] = keyword;
        return this;
    }
}