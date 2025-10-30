import { BatchExportSWRBaselineInfoRequestInfo } from './BatchExportSWRBaselineInfoRequestInfo';


export class ShowImageSecurityReportStatisticRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'security_report_type'?: string;
    public body?: BatchExportSWRBaselineInfoRequestInfo;
    public constructor(region?: string, securityReportType?: string) { 
        this['region'] = region;
        this['security_report_type'] = securityReportType;
    }
    public withRegion(region: string): ShowImageSecurityReportStatisticRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowImageSecurityReportStatisticRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSecurityReportType(securityReportType: string): ShowImageSecurityReportStatisticRequest {
        this['security_report_type'] = securityReportType;
        return this;
    }
    public set securityReportType(securityReportType: string  | undefined) {
        this['security_report_type'] = securityReportType;
    }
    public get securityReportType(): string | undefined {
        return this['security_report_type'];
    }
    public withBody(body: BatchExportSWRBaselineInfoRequestInfo): ShowImageSecurityReportStatisticRequest {
        this['body'] = body;
        return this;
    }
}