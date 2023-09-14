

export class ListAuditLogDownloadLinkRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'last_file_name'?: string;
    public limit?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(instanceId?: string, startTime?: string, endTime?: string) { 
        this['instance_id'] = instanceId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withXLanguage(xLanguage: string): ListAuditLogDownloadLinkRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListAuditLogDownloadLinkRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ListAuditLogDownloadLinkRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withLastFileName(lastFileName: string): ListAuditLogDownloadLinkRequest {
        this['last_file_name'] = lastFileName;
        return this;
    }
    public set lastFileName(lastFileName: string  | undefined) {
        this['last_file_name'] = lastFileName;
    }
    public get lastFileName(): string | undefined {
        return this['last_file_name'];
    }
    public withLimit(limit: number): ListAuditLogDownloadLinkRequest {
        this['limit'] = limit;
        return this;
    }
    public withStartTime(startTime: string): ListAuditLogDownloadLinkRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListAuditLogDownloadLinkRequest {
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