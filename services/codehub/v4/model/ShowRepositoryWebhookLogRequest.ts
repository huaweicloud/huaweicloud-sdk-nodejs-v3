

export class ShowRepositoryWebhookLogRequest {
    private 'repository_id'?: number;
    private 'hook_id'?: number;
    private 'log_id'?: number;
    public constructor(repositoryId?: number, hookId?: number, logId?: number) { 
        this['repository_id'] = repositoryId;
        this['hook_id'] = hookId;
        this['log_id'] = logId;
    }
    public withRepositoryId(repositoryId: number): ShowRepositoryWebhookLogRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withHookId(hookId: number): ShowRepositoryWebhookLogRequest {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: number  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): number | undefined {
        return this['hook_id'];
    }
    public withLogId(logId: number): ShowRepositoryWebhookLogRequest {
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