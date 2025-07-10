

export class SecurityReportSubscriptionSummaryResponse {
    private 'subscription_id'?: string;
    private 'report_id'?: string;
    private 'report_name'?: string;
    private 'sending_period'?: string;
    private 'report_category'?: string;
    private 'report_status'?: string;
    private 'is_all_enterprise_project'?: boolean;
    private 'enterprise_project_id'?: string;
    private 'template_eps_id'?: string;
    private 'is_report_created'?: boolean;
    private 'latest_create_time'?: number;
    public constructor() { 
    }
    public withSubscriptionId(subscriptionId: string): SecurityReportSubscriptionSummaryResponse {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withReportId(reportId: string): SecurityReportSubscriptionSummaryResponse {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withReportName(reportName: string): SecurityReportSubscriptionSummaryResponse {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withSendingPeriod(sendingPeriod: string): SecurityReportSubscriptionSummaryResponse {
        this['sending_period'] = sendingPeriod;
        return this;
    }
    public set sendingPeriod(sendingPeriod: string  | undefined) {
        this['sending_period'] = sendingPeriod;
    }
    public get sendingPeriod(): string | undefined {
        return this['sending_period'];
    }
    public withReportCategory(reportCategory: string): SecurityReportSubscriptionSummaryResponse {
        this['report_category'] = reportCategory;
        return this;
    }
    public set reportCategory(reportCategory: string  | undefined) {
        this['report_category'] = reportCategory;
    }
    public get reportCategory(): string | undefined {
        return this['report_category'];
    }
    public withReportStatus(reportStatus: string): SecurityReportSubscriptionSummaryResponse {
        this['report_status'] = reportStatus;
        return this;
    }
    public set reportStatus(reportStatus: string  | undefined) {
        this['report_status'] = reportStatus;
    }
    public get reportStatus(): string | undefined {
        return this['report_status'];
    }
    public withIsAllEnterpriseProject(isAllEnterpriseProject: boolean): SecurityReportSubscriptionSummaryResponse {
        this['is_all_enterprise_project'] = isAllEnterpriseProject;
        return this;
    }
    public set isAllEnterpriseProject(isAllEnterpriseProject: boolean  | undefined) {
        this['is_all_enterprise_project'] = isAllEnterpriseProject;
    }
    public get isAllEnterpriseProject(): boolean | undefined {
        return this['is_all_enterprise_project'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SecurityReportSubscriptionSummaryResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTemplateEpsId(templateEpsId: string): SecurityReportSubscriptionSummaryResponse {
        this['template_eps_id'] = templateEpsId;
        return this;
    }
    public set templateEpsId(templateEpsId: string  | undefined) {
        this['template_eps_id'] = templateEpsId;
    }
    public get templateEpsId(): string | undefined {
        return this['template_eps_id'];
    }
    public withIsReportCreated(isReportCreated: boolean): SecurityReportSubscriptionSummaryResponse {
        this['is_report_created'] = isReportCreated;
        return this;
    }
    public set isReportCreated(isReportCreated: boolean  | undefined) {
        this['is_report_created'] = isReportCreated;
    }
    public get isReportCreated(): boolean | undefined {
        return this['is_report_created'];
    }
    public withLatestCreateTime(latestCreateTime: number): SecurityReportSubscriptionSummaryResponse {
        this['latest_create_time'] = latestCreateTime;
        return this;
    }
    public set latestCreateTime(latestCreateTime: number  | undefined) {
        this['latest_create_time'] = latestCreateTime;
    }
    public get latestCreateTime(): number | undefined {
        return this['latest_create_time'];
    }
}