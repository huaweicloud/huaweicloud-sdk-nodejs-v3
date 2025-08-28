import { ChangeAgentAutoUpgradeStatusRequestInfo } from './ChangeAgentAutoUpgradeStatusRequestInfo';


export class ChangeAgentAutoUpgradeStatusRequest {
    private 'enterprise_project_id'?: string;
    public body?: ChangeAgentAutoUpgradeStatusRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeAgentAutoUpgradeStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangeAgentAutoUpgradeStatusRequestInfo): ChangeAgentAutoUpgradeStatusRequest {
        this['body'] = body;
        return this;
    }
}