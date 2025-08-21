

export class ListGroupWebhookLogsRequest {
    private 'group_id'?: number;
    private 'hook_id'?: number;
    public offset?: number;
    public limit?: number;
    private 'repository_id'?: number;
    public uuid?: string;
    private 'created_after'?: Date;
    private 'created_before'?: Date;
    public constructor(groupId?: number, hookId?: number) { 
        this['group_id'] = groupId;
        this['hook_id'] = hookId;
    }
    public withGroupId(groupId: number): ListGroupWebhookLogsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withHookId(hookId: number): ListGroupWebhookLogsRequest {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: number  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): number | undefined {
        return this['hook_id'];
    }
    public withOffset(offset: number): ListGroupWebhookLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGroupWebhookLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withRepositoryId(repositoryId: number): ListGroupWebhookLogsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withUuid(uuid: string): ListGroupWebhookLogsRequest {
        this['uuid'] = uuid;
        return this;
    }
    public withCreatedAfter(createdAfter: Date): ListGroupWebhookLogsRequest {
        this['created_after'] = createdAfter;
        return this;
    }
    public set createdAfter(createdAfter: Date  | undefined) {
        this['created_after'] = createdAfter;
    }
    public get createdAfter(): Date | undefined {
        return this['created_after'];
    }
    public withCreatedBefore(createdBefore: Date): ListGroupWebhookLogsRequest {
        this['created_before'] = createdBefore;
        return this;
    }
    public set createdBefore(createdBefore: Date  | undefined) {
        this['created_before'] = createdBefore;
    }
    public get createdBefore(): Date | undefined {
        return this['created_before'];
    }
}