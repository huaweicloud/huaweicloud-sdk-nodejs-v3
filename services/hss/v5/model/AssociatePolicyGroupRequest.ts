import { AssociatePolicyGroupRequestInfo } from './AssociatePolicyGroupRequestInfo';


export class AssociatePolicyGroupRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'Content-Type'?: string;
    public body?: AssociatePolicyGroupRequestInfo;
    public constructor(region?: string) { 
        this['region'] = region;
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
    public withContentType(contentType: string): AssociatePolicyGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: AssociatePolicyGroupRequestInfo): AssociatePolicyGroupRequest {
        this['body'] = body;
        return this;
    }
}