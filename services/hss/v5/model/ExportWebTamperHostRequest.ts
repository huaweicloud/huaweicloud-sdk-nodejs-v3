import { ExportWebTamperHostRequestInfo } from './ExportWebTamperHostRequestInfo';


export class ExportWebTamperHostRequest {
    private 'enterprise_project_id'?: string;
    public body?: ExportWebTamperHostRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportWebTamperHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ExportWebTamperHostRequestInfo): ExportWebTamperHostRequest {
        this['body'] = body;
        return this;
    }
}