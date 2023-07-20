

export class ShowErrorLogRequest {
    private 'instance_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'node_id'?: string;
    public type?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, startTime?: string, endTime?: string) { 
        this['instance_id'] = instanceId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withInstanceId(instanceId: string): ShowErrorLogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartTime(startTime: string): ShowErrorLogRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowErrorLogRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withNodeId(nodeId: string): ShowErrorLogRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withType(type: string): ShowErrorLogRequest {
        this['type'] = type;
        return this;
    }
    public withOffset(offset: number): ShowErrorLogRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowErrorLogRequest {
        this['limit'] = limit;
        return this;
    }
}