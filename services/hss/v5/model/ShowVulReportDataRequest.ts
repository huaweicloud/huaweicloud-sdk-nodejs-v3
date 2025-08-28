import { VulReportRequestBody } from './VulReportRequestBody';


export class ShowVulReportDataRequest {
    private 'enterprise_project_id'?: string;
    public body?: VulReportRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowVulReportDataRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: VulReportRequestBody): ShowVulReportDataRequest {
        this['body'] = body;
        return this;
    }
}