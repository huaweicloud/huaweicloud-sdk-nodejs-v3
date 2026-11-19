import { AddSecurityReportRequestInfo } from './AddSecurityReportRequestInfo';


export class AddSecurityReportRequest {
    private 'enterprise_project_id'?: string;
    public body?: AddSecurityReportRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddSecurityReportRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: AddSecurityReportRequestInfo): AddSecurityReportRequest {
        this['body'] = body;
        return this;
    }
}