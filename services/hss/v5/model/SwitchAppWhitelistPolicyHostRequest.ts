import { SwitchAppWhitelistPolicyHostRequestInfo } from './SwitchAppWhitelistPolicyHostRequestInfo';


export class SwitchAppWhitelistPolicyHostRequest {
    private 'enterprise_project_id'?: string;
    public body?: SwitchAppWhitelistPolicyHostRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SwitchAppWhitelistPolicyHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SwitchAppWhitelistPolicyHostRequestInfo): SwitchAppWhitelistPolicyHostRequest {
        this['body'] = body;
        return this;
    }
}