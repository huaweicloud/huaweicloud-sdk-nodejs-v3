

export class DownloadSlowLogFileRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    public constructor(instanceId?: string, nodeId?: string) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
    }
    public withXLanguage(xLanguage: string): DownloadSlowLogFileRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DownloadSlowLogFileRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): DownloadSlowLogFileRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
}