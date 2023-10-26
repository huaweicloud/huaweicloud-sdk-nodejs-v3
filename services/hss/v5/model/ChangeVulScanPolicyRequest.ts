import { ChangeVulScanPolicyRequestInfo } from './ChangeVulScanPolicyRequestInfo';


export class ChangeVulScanPolicyRequest {
    private 'enterprise_project_id'?: string;
    public body?: ChangeVulScanPolicyRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeVulScanPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangeVulScanPolicyRequestInfo): ChangeVulScanPolicyRequest {
        this['body'] = body;
        return this;
    }
}