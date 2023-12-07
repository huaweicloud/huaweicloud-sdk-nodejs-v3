

export class ShowSecurityDataClassificationRuleRequest {
    public workspace?: string;
    public id?: string;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowSecurityDataClassificationRuleRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowSecurityDataClassificationRuleRequest {
        this['id'] = id;
        return this;
    }
}