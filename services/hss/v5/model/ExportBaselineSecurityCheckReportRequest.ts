import { ExportBaselineRequestBody } from './ExportBaselineRequestBody';


export class ExportBaselineSecurityCheckReportRequest {
    private 'enterprise_project_id'?: string;
    public body?: ExportBaselineRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportBaselineSecurityCheckReportRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ExportBaselineRequestBody): ExportBaselineSecurityCheckReportRequest {
        this['body'] = body;
        return this;
    }
}