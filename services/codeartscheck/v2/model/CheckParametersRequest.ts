

export class CheckParametersRequest {
    private 'project_id'?: string;
    private 'task_id'?: string;
    private 'ruleset_id'?: string;
    public language?: string;
    public constructor(projectId?: string, taskId?: string, rulesetId?: string, language?: string) { 
        this['project_id'] = projectId;
        this['task_id'] = taskId;
        this['ruleset_id'] = rulesetId;
        this['language'] = language;
    }
    public withProjectId(projectId: string): CheckParametersRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTaskId(taskId: string): CheckParametersRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withRulesetId(rulesetId: string): CheckParametersRequest {
        this['ruleset_id'] = rulesetId;
        return this;
    }
    public set rulesetId(rulesetId: string  | undefined) {
        this['ruleset_id'] = rulesetId;
    }
    public get rulesetId(): string | undefined {
        return this['ruleset_id'];
    }
    public withLanguage(language: string): CheckParametersRequest {
        this['language'] = language;
        return this;
    }
}