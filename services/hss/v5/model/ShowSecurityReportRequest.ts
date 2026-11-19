

export class ShowSecurityReportRequest {
    private 'enterprise_project_id'?: string;
    private 'report_id'?: number;
    private 'report_sub_id'?: number;
    public constructor(reportId?: number, reportSubId?: number) { 
        this['report_id'] = reportId;
        this['report_sub_id'] = reportSubId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowSecurityReportRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withReportId(reportId: number): ShowSecurityReportRequest {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: number  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): number | undefined {
        return this['report_id'];
    }
    public withReportSubId(reportSubId: number): ShowSecurityReportRequest {
        this['report_sub_id'] = reportSubId;
        return this;
    }
    public set reportSubId(reportSubId: number  | undefined) {
        this['report_sub_id'] = reportSubId;
    }
    public get reportSubId(): number | undefined {
        return this['report_sub_id'];
    }
}