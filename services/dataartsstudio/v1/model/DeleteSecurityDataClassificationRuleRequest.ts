

export class DeleteSecurityDataClassificationRuleRequest {
    public workspace?: string;
    public id?: string;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): DeleteSecurityDataClassificationRuleRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): DeleteSecurityDataClassificationRuleRequest {
        this['id'] = id;
        return this;
    }
}