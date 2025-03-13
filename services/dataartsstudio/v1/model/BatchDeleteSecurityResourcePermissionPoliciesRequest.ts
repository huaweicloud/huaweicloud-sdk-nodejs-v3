import { BatchDeleteResourcePolicyDTO } from './BatchDeleteResourcePolicyDTO';


export class BatchDeleteSecurityResourcePermissionPoliciesRequest {
    public workspace?: string;
    public body?: BatchDeleteResourcePolicyDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): BatchDeleteSecurityResourcePermissionPoliciesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BatchDeleteResourcePolicyDTO): BatchDeleteSecurityResourcePermissionPoliciesRequest {
        this['body'] = body;
        return this;
    }
}