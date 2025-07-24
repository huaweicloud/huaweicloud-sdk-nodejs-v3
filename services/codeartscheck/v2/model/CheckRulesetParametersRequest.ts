

export class CheckRulesetParametersRequest {
    private 'project_id'?: string;
    private 'task_id'?: string;
    private 'ruleset_id'?: string;
    public language?: string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string, taskId?: string, rulesetId?: string, language?: string) { 
        this['project_id'] = projectId;
        this['task_id'] = taskId;
        this['ruleset_id'] = rulesetId;
        this['language'] = language;
    }
    public withProjectId(projectId: string): CheckRulesetParametersRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTaskId(taskId: string): CheckRulesetParametersRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withRulesetId(rulesetId: string): CheckRulesetParametersRequest {
        this['ruleset_id'] = rulesetId;
        return this;
    }
    public set rulesetId(rulesetId: string  | undefined) {
        this['ruleset_id'] = rulesetId;
    }
    public get rulesetId(): string | undefined {
        return this['ruleset_id'];
    }
    public withLanguage(language: string): CheckRulesetParametersRequest {
        this['language'] = language;
        return this;
    }
    public withOffset(offset: number): CheckRulesetParametersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): CheckRulesetParametersRequest {
        this['limit'] = limit;
        return this;
    }
}