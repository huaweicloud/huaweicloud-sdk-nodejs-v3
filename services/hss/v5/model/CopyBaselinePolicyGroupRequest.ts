import { CopyBaselinePolicyGroupRequestBody } from './CopyBaselinePolicyGroupRequestBody';


export class CopyBaselinePolicyGroupRequest {
    private 'enterprise_project_id'?: string;
    public body?: CopyBaselinePolicyGroupRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CopyBaselinePolicyGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CopyBaselinePolicyGroupRequestBody): CopyBaselinePolicyGroupRequest {
        this['body'] = body;
        return this;
    }
}