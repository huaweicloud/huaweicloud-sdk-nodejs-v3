

export class ListSecurityReportSubscriptionsRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    private 'report_name'?: string;
    private 'report_category'?: string;
    private 'report_status'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(contentType?: string, enterpriseProjectId?: string) { 
        this['Content-Type'] = contentType;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withContentType(contentType: string): ListSecurityReportSubscriptionsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSecurityReportSubscriptionsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withReportName(reportName: string): ListSecurityReportSubscriptionsRequest {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withReportCategory(reportCategory: string): ListSecurityReportSubscriptionsRequest {
        this['report_category'] = reportCategory;
        return this;
    }
    public set reportCategory(reportCategory: string  | undefined) {
        this['report_category'] = reportCategory;
    }
    public get reportCategory(): string | undefined {
        return this['report_category'];
    }
    public withReportStatus(reportStatus: string): ListSecurityReportSubscriptionsRequest {
        this['report_status'] = reportStatus;
        return this;
    }
    public set reportStatus(reportStatus: string  | undefined) {
        this['report_status'] = reportStatus;
    }
    public get reportStatus(): string | undefined {
        return this['report_status'];
    }
    public withOffset(offset: number): ListSecurityReportSubscriptionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSecurityReportSubscriptionsRequest {
        this['limit'] = limit;
        return this;
    }
}