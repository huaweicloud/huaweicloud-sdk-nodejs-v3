

export class ShowReportSubscriptionRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'report_id'?: number;
    public constructor(reportId?: number) { 
        this['report_id'] = reportId;
    }
    public withRegion(region: string): ShowReportSubscriptionRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowReportSubscriptionRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withReportId(reportId: number): ShowReportSubscriptionRequest {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: number  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): number | undefined {
        return this['report_id'];
    }
}