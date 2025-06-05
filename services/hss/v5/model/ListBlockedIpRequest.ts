

export class ListBlockedIpRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'last_days'?: number;
    private 'host_name'?: string;
    private 'src_ip'?: string;
    private 'intercept_status'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withRegion(region: string): ListBlockedIpRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListBlockedIpRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLastDays(lastDays: number): ListBlockedIpRequest {
        this['last_days'] = lastDays;
        return this;
    }
    public set lastDays(lastDays: number  | undefined) {
        this['last_days'] = lastDays;
    }
    public get lastDays(): number | undefined {
        return this['last_days'];
    }
    public withHostName(hostName: string): ListBlockedIpRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withSrcIp(srcIp: string): ListBlockedIpRequest {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withInterceptStatus(interceptStatus: string): ListBlockedIpRequest {
        this['intercept_status'] = interceptStatus;
        return this;
    }
    public set interceptStatus(interceptStatus: string  | undefined) {
        this['intercept_status'] = interceptStatus;
    }
    public get interceptStatus(): string | undefined {
        return this['intercept_status'];
    }
    public withOffset(offset: number): ListBlockedIpRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBlockedIpRequest {
        this['limit'] = limit;
        return this;
    }
}