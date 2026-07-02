

export class DownloadRealtimeSessionRequest {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'X-Language'?: string;
    private 'request_id'?: string;
    public constructor(instanceId?: string, nodeId?: string, requestId?: string) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
        this['request_id'] = requestId;
    }
    public withInstanceId(instanceId: string): DownloadRealtimeSessionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): DownloadRealtimeSessionRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withXLanguage(xLanguage: string): DownloadRealtimeSessionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withRequestId(requestId: string): DownloadRealtimeSessionRequest {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}