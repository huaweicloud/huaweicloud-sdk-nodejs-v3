import { BatchDeletePolicySetsDTO } from './BatchDeletePolicySetsDTO';


export class BatchDeleteSecurityDynamicMaskingPoliciesRequest {
    public workspace?: string;
    public body?: BatchDeletePolicySetsDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): BatchDeleteSecurityDynamicMaskingPoliciesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BatchDeletePolicySetsDTO): BatchDeleteSecurityDynamicMaskingPoliciesRequest {
        this['body'] = body;
        return this;
    }
}