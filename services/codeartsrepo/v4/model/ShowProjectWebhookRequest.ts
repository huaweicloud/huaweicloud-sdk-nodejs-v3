

export class ShowProjectWebhookRequest {
    private 'project_id'?: string;
    private 'hook_id'?: number;
    public constructor(projectId?: string, hookId?: number) { 
        this['project_id'] = projectId;
        this['hook_id'] = hookId;
    }
    public withProjectId(projectId: string): ShowProjectWebhookRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withHookId(hookId: number): ShowProjectWebhookRequest {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: number  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): number | undefined {
        return this['hook_id'];
    }
}