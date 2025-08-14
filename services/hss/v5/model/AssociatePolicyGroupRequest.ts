import { AssociatePolicyGroupRequestInfo } from './AssociatePolicyGroupRequestInfo';


export class AssociatePolicyGroupRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: AssociatePolicyGroupRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): AssociatePolicyGroupRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AssociatePolicyGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: AssociatePolicyGroupRequestInfo): AssociatePolicyGroupRequest {
        this['body'] = body;
        return this;
    }
}