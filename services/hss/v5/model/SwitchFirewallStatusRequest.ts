import { SwitchFirewallStatusRequestInfo } from './SwitchFirewallStatusRequestInfo';


export class SwitchFirewallStatusRequest {
    private 'enterprise_project_id'?: string;
    public body?: SwitchFirewallStatusRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SwitchFirewallStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SwitchFirewallStatusRequestInfo): SwitchFirewallStatusRequest {
        this['body'] = body;
        return this;
    }
}