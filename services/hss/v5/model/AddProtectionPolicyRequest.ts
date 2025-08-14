import { AddProtectionPolicyInfoRequestInfo } from './AddProtectionPolicyInfoRequestInfo';


export class AddProtectionPolicyRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: AddProtectionPolicyInfoRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): AddProtectionPolicyRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddProtectionPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: AddProtectionPolicyInfoRequestInfo): AddProtectionPolicyRequest {
        this['body'] = body;
        return this;
    }
}