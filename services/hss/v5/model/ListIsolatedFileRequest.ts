

export class ListIsolatedFileRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'last_days'?: number;
    private 'host_name'?: string;
    private 'isolation_status'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): ListIsolatedFileRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListIsolatedFileRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLastDays(lastDays: number): ListIsolatedFileRequest {
        this['last_days'] = lastDays;
        return this;
    }
    public set lastDays(lastDays: number  | undefined) {
        this['last_days'] = lastDays;
    }
    public get lastDays(): number | undefined {
        return this['last_days'];
    }
    public withHostName(hostName: string): ListIsolatedFileRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withIsolationStatus(isolationStatus: string): ListIsolatedFileRequest {
        this['isolation_status'] = isolationStatus;
        return this;
    }
    public set isolationStatus(isolationStatus: string  | undefined) {
        this['isolation_status'] = isolationStatus;
    }
    public get isolationStatus(): string | undefined {
        return this['isolation_status'];
    }
    public withOffset(offset: number): ListIsolatedFileRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListIsolatedFileRequest {
        this['limit'] = limit;
        return this;
    }
}