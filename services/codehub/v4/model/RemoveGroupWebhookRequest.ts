

export class RemoveGroupWebhookRequest {
    private 'group_id'?: number;
    private 'hook_id'?: number;
    public constructor(groupId?: number, hookId?: number) { 
        this['group_id'] = groupId;
        this['hook_id'] = hookId;
    }
    public withGroupId(groupId: number): RemoveGroupWebhookRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withHookId(hookId: number): RemoveGroupWebhookRequest {
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