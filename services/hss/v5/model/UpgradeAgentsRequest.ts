import { UpgradeAgentsRequestInfo } from './UpgradeAgentsRequestInfo';


export class UpgradeAgentsRequest {
    private 'enterprise_project_id'?: string;
    public body?: UpgradeAgentsRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpgradeAgentsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: UpgradeAgentsRequestInfo): UpgradeAgentsRequest {
        this['body'] = body;
        return this;
    }
}