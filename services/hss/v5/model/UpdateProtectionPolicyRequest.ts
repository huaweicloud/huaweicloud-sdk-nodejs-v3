import { UpdateProtectionPolicyInfoRequestInfo } from './UpdateProtectionPolicyInfoRequestInfo';


export class UpdateProtectionPolicyRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: UpdateProtectionPolicyInfoRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): UpdateProtectionPolicyRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateProtectionPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: UpdateProtectionPolicyInfoRequestInfo): UpdateProtectionPolicyRequest {
        this['body'] = body;
        return this;
    }
}