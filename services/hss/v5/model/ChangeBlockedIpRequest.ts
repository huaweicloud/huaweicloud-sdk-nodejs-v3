import { ChangeBlockedIpRequestInfo } from './ChangeBlockedIpRequestInfo';


export class ChangeBlockedIpRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: ChangeBlockedIpRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): ChangeBlockedIpRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeBlockedIpRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangeBlockedIpRequestInfo): ChangeBlockedIpRequest {
        this['body'] = body;
        return this;
    }
}