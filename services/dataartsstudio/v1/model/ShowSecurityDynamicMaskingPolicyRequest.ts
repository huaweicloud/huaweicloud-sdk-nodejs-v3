

export class ShowSecurityDynamicMaskingPolicyRequest {
    public workspace?: string;
    public id?: string;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowSecurityDynamicMaskingPolicyRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowSecurityDynamicMaskingPolicyRequest {
        this['id'] = id;
        return this;
    }
}