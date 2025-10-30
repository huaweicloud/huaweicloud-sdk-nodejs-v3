import { SendSecurityReportRequestInfo } from './SendSecurityReportRequestInfo';


export class SendSecurityReportRequest {
    private 'enterprise_project_id'?: string;
    public body?: SendSecurityReportRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SendSecurityReportRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SendSecurityReportRequestInfo): SendSecurityReportRequest {
        this['body'] = body;
        return this;
    }
}