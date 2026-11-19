import { ExportVulReportRequestInfo } from './ExportVulReportRequestInfo';


export class ExportVulReportRequest {
    private 'enterprise_project_id'?: string;
    public body?: ExportVulReportRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportVulReportRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ExportVulReportRequestInfo): ExportVulReportRequest {
        this['body'] = body;
        return this;
    }
}