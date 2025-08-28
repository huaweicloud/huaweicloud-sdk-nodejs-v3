import { PolicySwitchRequestInfo } from './PolicySwitchRequestInfo';


export class ChangePolicySwitchStatusRequest {
    private 'enterprise_project_id'?: string;
    public body?: PolicySwitchRequestInfo;
    public constructor(enterpriseProjectId?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangePolicySwitchStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: PolicySwitchRequestInfo): ChangePolicySwitchStatusRequest {
        this['body'] = body;
        return this;
    }
}