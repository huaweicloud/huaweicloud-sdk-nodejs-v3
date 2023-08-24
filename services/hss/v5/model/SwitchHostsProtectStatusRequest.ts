import { SwitchHostsProtectStatusRequestInfo } from './SwitchHostsProtectStatusRequestInfo';


export class SwitchHostsProtectStatusRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: SwitchHostsProtectStatusRequestInfo;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): SwitchHostsProtectStatusRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SwitchHostsProtectStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SwitchHostsProtectStatusRequestInfo): SwitchHostsProtectStatusRequest {
        this['body'] = body;
        return this;
    }
}