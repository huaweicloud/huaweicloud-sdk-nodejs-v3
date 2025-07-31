import { ExportHandledVulnerabilitiesRequestBody } from './ExportHandledVulnerabilitiesRequestBody';


export class ExportHandledVulnerabilitiesRequest {
    private 'enterprise_project_id'?: string;
    public body?: ExportHandledVulnerabilitiesRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportHandledVulnerabilitiesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ExportHandledVulnerabilitiesRequestBody): ExportHandledVulnerabilitiesRequest {
        this['body'] = body;
        return this;
    }
}