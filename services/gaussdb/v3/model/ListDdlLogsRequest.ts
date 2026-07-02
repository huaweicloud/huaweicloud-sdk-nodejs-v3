

export class ListDdlLogsRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(instanceId?: string, nodeId?: string) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
    }
    public withXLanguage(xLanguage: string): ListDdlLogsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListDdlLogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ListDdlLogsRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withOffset(offset: number): ListDdlLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDdlLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withStartTime(startTime: string): ListDdlLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListDdlLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}