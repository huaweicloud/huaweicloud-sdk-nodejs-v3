

export class RuleInfo {
    public id?: string;
    private 'project_id'?: string;
    public rule?: string;
    public constructor() { 
    }
    public withId(id: string): RuleInfo {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): RuleInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRule(rule: string): RuleInfo {
        this['rule'] = rule;
        return this;
    }
}