

export class DeleteRulesetRequest {
    private 'project_id'?: string;
    private 'ruleset_id'?: string;
    public constructor(projectId?: string, rulesetId?: string) { 
        this['project_id'] = projectId;
        this['ruleset_id'] = rulesetId;
    }
    public withProjectId(projectId: string): DeleteRulesetRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRulesetId(rulesetId: string): DeleteRulesetRequest {
        this['ruleset_id'] = rulesetId;
        return this;
    }
    public set rulesetId(rulesetId: string  | undefined) {
        this['ruleset_id'] = rulesetId;
    }
    public get rulesetId(): string | undefined {
        return this['ruleset_id'];
    }
}