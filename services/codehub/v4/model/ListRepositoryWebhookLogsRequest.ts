

export class ListRepositoryWebhookLogsRequest {
    private 'repository_id'?: number;
    private 'hook_id'?: number;
    public offset?: number;
    public limit?: number;
    public uuid?: string;
    private 'created_after'?: Date;
    private 'created_before'?: Date;
    public constructor(repositoryId?: number, hookId?: number) { 
        this['repository_id'] = repositoryId;
        this['hook_id'] = hookId;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryWebhookLogsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withHookId(hookId: number): ListRepositoryWebhookLogsRequest {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: number  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): number | undefined {
        return this['hook_id'];
    }
    public withOffset(offset: number): ListRepositoryWebhookLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryWebhookLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withUuid(uuid: string): ListRepositoryWebhookLogsRequest {
        this['uuid'] = uuid;
        return this;
    }
    public withCreatedAfter(createdAfter: Date): ListRepositoryWebhookLogsRequest {
        this['created_after'] = createdAfter;
        return this;
    }
    public set createdAfter(createdAfter: Date  | undefined) {
        this['created_after'] = createdAfter;
    }
    public get createdAfter(): Date | undefined {
        return this['created_after'];
    }
    public withCreatedBefore(createdBefore: Date): ListRepositoryWebhookLogsRequest {
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