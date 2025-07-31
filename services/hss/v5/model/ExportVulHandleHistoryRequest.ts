import { ExportVulHandleHistoryRequestBody } from './ExportVulHandleHistoryRequestBody';


export class ExportVulHandleHistoryRequest {
    private 'enterprise_project_id'?: string;
    public body?: ExportVulHandleHistoryRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportVulHandleHistoryRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ExportVulHandleHistoryRequestBody): ExportVulHandleHistoryRequest {
        this['body'] = body;
        return this;
    }
}