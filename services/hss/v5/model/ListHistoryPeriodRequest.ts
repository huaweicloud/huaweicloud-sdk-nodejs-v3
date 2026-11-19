

export class ListHistoryPeriodRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'report_id'?: number;
    public constructor(reportId?: number) { 
        this['report_id'] = reportId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListHistoryPeriodRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListHistoryPeriodRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHistoryPeriodRequest {
        this['limit'] = limit;
        return this;
    }
    public withReportId(reportId: number): ListHistoryPeriodRequest {
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