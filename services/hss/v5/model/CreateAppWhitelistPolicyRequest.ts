import { CreateAppWhitelistPolicyRequestInfo } from './CreateAppWhitelistPolicyRequestInfo';


export class CreateAppWhitelistPolicyRequest {
    private 'enterprise_project_id'?: string;
    public body?: CreateAppWhitelistPolicyRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateAppWhitelistPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CreateAppWhitelistPolicyRequestInfo): CreateAppWhitelistPolicyRequest {
        this['body'] = body;
        return this;
    }
}