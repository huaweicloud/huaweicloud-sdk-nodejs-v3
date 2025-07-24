

export class ListTemplateRulesRequest {
    private 'project_id'?: string;
    private 'ruleset_id'?: string;
    public types?: string;
    public languages?: string;
    public tags?: string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string, rulesetId?: string, types?: string) { 
        this['project_id'] = projectId;
        this['ruleset_id'] = rulesetId;
        this['types'] = types;
    }
    public withProjectId(projectId: string): ListTemplateRulesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRulesetId(rulesetId: string): ListTemplateRulesRequest {
        this['ruleset_id'] = rulesetId;
        return this;
    }
    public set rulesetId(rulesetId: string  | undefined) {
        this['ruleset_id'] = rulesetId;
    }
    public get rulesetId(): string | undefined {
        return this['ruleset_id'];
    }
    public withTypes(types: string): ListTemplateRulesRequest {
        this['types'] = types;
        return this;
    }
    public withLanguages(languages: string): ListTemplateRulesRequest {
        this['languages'] = languages;
        return this;
    }
    public withTags(tags: string): ListTemplateRulesRequest {
        this['tags'] = tags;
        return this;
    }
    public withOffset(offset: number): ListTemplateRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTemplateRulesRequest {
        this['limit'] = limit;
        return this;
    }
}