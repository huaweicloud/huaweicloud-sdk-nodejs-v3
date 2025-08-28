import { DeletePolicyGroupRequestInfo } from './DeletePolicyGroupRequestInfo';


export class DeletePolicyGroupRequest {
    private 'enterprise_project_id'?: string;
    public body?: DeletePolicyGroupRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeletePolicyGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: DeletePolicyGroupRequestInfo): DeletePolicyGroupRequest {
        this['body'] = body;
        return this;
    }
}