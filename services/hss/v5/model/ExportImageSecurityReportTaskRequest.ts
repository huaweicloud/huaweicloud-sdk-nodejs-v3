import { ExportImageSecurityReportTaskRequestInfo } from './ExportImageSecurityReportTaskRequestInfo';


export class ExportImageSecurityReportTaskRequest {
    private 'enterprise_project_id'?: string;
    public body?: ExportImageSecurityReportTaskRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportImageSecurityReportTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ExportImageSecurityReportTaskRequestInfo): ExportImageSecurityReportTaskRequest {
        this['body'] = body;
        return this;
    }
}