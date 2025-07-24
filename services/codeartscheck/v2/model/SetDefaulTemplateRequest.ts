

export class SetDefaulTemplateRequest {
    private 'project_id'?: string;
    private 'ruleset_id'?: string;
    public language?: string;
    public constructor(projectId?: string, rulesetId?: string, language?: string) { 
        this['project_id'] = projectId;
        this['ruleset_id'] = rulesetId;
        this['language'] = language;
    }
    public withProjectId(projectId: string): SetDefaulTemplateRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRulesetId(rulesetId: string): SetDefaulTemplateRequest {
        this['ruleset_id'] = rulesetId;
        return this;
    }
    public set rulesetId(rulesetId: string  | undefined) {
        this['ruleset_id'] = rulesetId;
    }
    public get rulesetId(): string | undefined {
        return this['ruleset_id'];
    }
    public withLanguage(language: string): SetDefaulTemplateRequest {
        this['language'] = language;
        return this;
    }
}