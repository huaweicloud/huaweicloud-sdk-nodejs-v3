

export class ShowGroupWebhookLogRequest {
    private 'group_id'?: number;
    private 'hook_id'?: number;
    private 'log_id'?: number;
    public constructor(groupId?: number, hookId?: number, logId?: number) { 
        this['group_id'] = groupId;
        this['hook_id'] = hookId;
        this['log_id'] = logId;
    }
    public withGroupId(groupId: number): ShowGroupWebhookLogRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withHookId(hookId: number): ShowGroupWebhookLogRequest {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: number  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): number | undefined {
        return this['hook_id'];
    }
    public withLogId(logId: number): ShowGroupWebhookLogRequest {
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