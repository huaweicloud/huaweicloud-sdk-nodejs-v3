

export class ListHostProtectHistoryInfoRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public limit?: number;
    public offset?: number;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'file_path'?: string;
    private 'file_operation'?: string;
    public constructor(region?: string, hostId?: string, startTime?: number, endTime?: number, limit?: number, offset?: number) { 
        this['region'] = region;
        this['host_id'] = hostId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withRegion(region: string): ListHostProtectHistoryInfoRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListHostProtectHistoryInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): ListHostProtectHistoryInfoRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withStartTime(startTime: number): ListHostProtectHistoryInfoRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListHostProtectHistoryInfoRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListHostProtectHistoryInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListHostProtectHistoryInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withHostName(hostName: string): ListHostProtectHistoryInfoRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ListHostProtectHistoryInfoRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withFilePath(filePath: string): ListHostProtectHistoryInfoRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileOperation(fileOperation: string): ListHostProtectHistoryInfoRequest {
        this['file_operation'] = fileOperation;
        return this;
    }
    public set fileOperation(fileOperation: string  | undefined) {
        this['file_operation'] = fileOperation;
    }
    public get fileOperation(): string | undefined {
        return this['file_operation'];
    }
}