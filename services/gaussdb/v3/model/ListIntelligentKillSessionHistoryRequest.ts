

export class ListIntelligentKillSessionHistoryRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public limit?: string;
    public offset?: string;
    public constructor(instanceId?: string, nodeId?: string, startTime?: number, endTime?: number) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withXLanguage(xLanguage: string): ListIntelligentKillSessionHistoryRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListIntelligentKillSessionHistoryRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ListIntelligentKillSessionHistoryRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withStartTime(startTime: number): ListIntelligentKillSessionHistoryRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListIntelligentKillSessionHistoryRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLimit(limit: string): ListIntelligentKillSessionHistoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListIntelligentKillSessionHistoryRequest {
        this['offset'] = offset;
        return this;
    }
}