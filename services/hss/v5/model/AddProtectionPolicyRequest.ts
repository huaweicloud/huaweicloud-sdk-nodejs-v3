import { AddProtectionPolicyInfoRequestInfo } from './AddProtectionPolicyInfoRequestInfo';


export class AddProtectionPolicyRequest {
    private 'enterprise_project_id'?: string;
    public region?: string;
    public body?: AddProtectionPolicyInfoRequestInfo;
    public constructor() { 
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
    public withRegion(region: string): AddProtectionPolicyRequest {
        this['region'] = region;
        return this;
    }
    public withBody(body: AddProtectionPolicyInfoRequestInfo): AddProtectionPolicyRequest {
        this['body'] = body;
        return this;
    }
}