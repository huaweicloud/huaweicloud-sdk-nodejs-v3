

export class ShowProjectWebhookLogRequest {
    private 'project_id'?: string;
    private 'hook_id'?: number;
    private 'log_id'?: number;
    public constructor(projectId?: string, hookId?: number, logId?: number) { 
        this['project_id'] = projectId;
        this['hook_id'] = hookId;
        this['log_id'] = logId;
    }
    public withProjectId(projectId: string): ShowProjectWebhookLogRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withHookId(hookId: number): ShowProjectWebhookLogRequest {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: number  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): number | undefined {
        return this['hook_id'];
    }
    public withLogId(logId: number): ShowProjectWebhookLogRequest {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: number  | undefined) {
        this['log_id'] = logId;
    }
    public get logId(): number | undefined {
        return this['log_id'];
    }
}