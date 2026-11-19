import { ChangeSecurityReportRequestInfo } from './ChangeSecurityReportRequestInfo';


export class ChangeSecurityReportRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: ChangeSecurityReportRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): ChangeSecurityReportRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeSecurityReportRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangeSecurityReportRequestInfo): ChangeSecurityReportRequest {
        this['body'] = body;
        return this;
    }
}