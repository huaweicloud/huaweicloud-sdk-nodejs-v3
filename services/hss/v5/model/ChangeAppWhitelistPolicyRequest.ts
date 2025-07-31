import { ChangeAppWhitelistPolicyRequestInfo } from './ChangeAppWhitelistPolicyRequestInfo';


export class ChangeAppWhitelistPolicyRequest {
    private 'enterprise_project_id'?: string;
    public body?: ChangeAppWhitelistPolicyRequestInfo;
    public constructor(enterpriseProjectId?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeAppWhitelistPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangeAppWhitelistPolicyRequestInfo): ChangeAppWhitelistPolicyRequest {
        this['body'] = body;
        return this;
    }
}