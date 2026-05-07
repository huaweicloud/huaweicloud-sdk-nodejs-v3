

export class ListSecurityReportRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'report_category'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withRegion(region: string): ListSecurityReportRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSecurityReportRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withReportCategory(reportCategory: string): ListSecurityReportRequest {
        this['report_category'] = reportCategory;
        return this;
    }
    public set reportCategory(reportCategory: string  | undefined) {
        this['report_category'] = reportCategory;
    }
    public get reportCategory(): string | undefined {
        return this['report_category'];
    }
    public withOffset(offset: number): ListSecurityReportRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSecurityReportRequest {
        this['limit'] = limit;
        return this;
    }
}