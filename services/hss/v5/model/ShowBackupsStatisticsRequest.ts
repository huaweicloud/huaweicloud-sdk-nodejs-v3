

export class ShowBackupsStatisticsRequest {
    private 'enterprise_project_id'?: string;
    public region?: string;
    private 'last_days'?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowBackupsStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRegion(region: string): ShowBackupsStatisticsRequest {
        this['region'] = region;
        return this;
    }
    public withLastDays(lastDays: number): ShowBackupsStatisticsRequest {
        this['last_days'] = lastDays;
        return this;
    }
    public set lastDays(lastDays: number  | undefined) {
        this['last_days'] = lastDays;
    }
    public get lastDays(): number | undefined {
        return this['last_days'];
    }
}