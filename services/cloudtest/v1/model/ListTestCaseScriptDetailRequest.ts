

export class ListTestCaseScriptDetailRequest {
    private 'project_id'?: string;
    private 'task_id'?: string;
    private 'tmss_case_uri'?: string;
    public constructor(projectId?: string, tmssCaseUri?: string) { 
        this['project_id'] = projectId;
        this['tmss_case_uri'] = tmssCaseUri;
    }
    public withProjectId(projectId: string): ListTestCaseScriptDetailRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTaskId(taskId: string): ListTestCaseScriptDetailRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTmssCaseUri(tmssCaseUri: string): ListTestCaseScriptDetailRequest {
        this['tmss_case_uri'] = tmssCaseUri;
        return this;
    }
    public set tmssCaseUri(tmssCaseUri: string  | undefined) {
        this['tmss_case_uri'] = tmssCaseUri;
    }
    public get tmssCaseUri(): string | undefined {
        return this['tmss_case_uri'];
    }
}