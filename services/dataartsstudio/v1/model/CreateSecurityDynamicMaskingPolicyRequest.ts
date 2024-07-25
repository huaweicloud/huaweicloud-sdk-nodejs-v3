import { DynamicMaskingPolicyCreateDTO } from './DynamicMaskingPolicyCreateDTO';


export class CreateSecurityDynamicMaskingPolicyRequest {
    public workspace?: string;
    public body?: DynamicMaskingPolicyCreateDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateSecurityDynamicMaskingPolicyRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: DynamicMaskingPolicyCreateDTO): CreateSecurityDynamicMaskingPolicyRequest {
        this['body'] = body;
        return this;
    }
}