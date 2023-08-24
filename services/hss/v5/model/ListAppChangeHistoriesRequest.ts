

export class ListAppChangeHistoriesRequest {
    private 'host_id'?: string;
    private 'host_ip'?: string;
    private 'host_name'?: string;
    private 'app_name'?: string;
    private 'variation_type'?: string;
    private 'enterprise_project_id'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public limit?: number;
    public offset?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor() { 
    }
    public withHostId(hostId: string): ListAppChangeHistoriesRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostIp(hostIp: string): ListAppChangeHistoriesRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withHostName(hostName: string): ListAppChangeHistoriesRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withAppName(appName: string): ListAppChangeHistoriesRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withVariationType(variationType: string): ListAppChangeHistoriesRequest {
        this['variation_type'] = variationType;
        return this;
    }
    public set variationType(variationType: string  | undefined) {
        this['variation_type'] = variationType;
    }
    public get variationType(): string | undefined {
        return this['variation_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAppChangeHistoriesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSortKey(sortKey: string): ListAppChangeHistoriesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListAppChangeHistoriesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withLimit(limit: number): ListAppChangeHistoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAppChangeHistoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withStartTime(startTime: number): ListAppChangeHistoriesRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListAppChangeHistoriesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}