

export class ShowSecurityDataClassificationRuleGroupRequest {
    public workspace?: string;
    public id?: string;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowSecurityDataClassificationRuleGroupRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowSecurityDataClassificationRuleGroupRequest {
        this['id'] = id;
        return this;
    }
}