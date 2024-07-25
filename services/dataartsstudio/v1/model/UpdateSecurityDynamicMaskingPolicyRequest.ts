import { DynamicMaskingPolicyUpdateDTO } from './DynamicMaskingPolicyUpdateDTO';


export class UpdateSecurityDynamicMaskingPolicyRequest {
    public workspace?: string;
    public id?: string;
    public body?: DynamicMaskingPolicyUpdateDTO;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): UpdateSecurityDynamicMaskingPolicyRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): UpdateSecurityDynamicMaskingPolicyRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: DynamicMaskingPolicyUpdateDTO): UpdateSecurityDynamicMaskingPolicyRequest {
        this['body'] = body;
        return this;
    }
}