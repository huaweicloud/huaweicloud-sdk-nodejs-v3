

export class ListProjectWebhookLogsRequest {
    private 'project_id'?: string;
    private 'hook_id'?: number;
    public offset?: number;
    public limit?: number;
    private 'repository_id'?: number;
    public uuid?: string;
    private 'created_after'?: Date;
    private 'created_before'?: Date;
    public constructor(projectId?: string, hookId?: number) { 
        this['project_id'] = projectId;
        this['hook_id'] = hookId;
    }
    public withProjectId(projectId: string): ListProjectWebhookLogsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withHookId(hookId: number): ListProjectWebhookLogsRequest {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: number  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): number | undefined {
        return this['hook_id'];
    }
    public withOffset(offset: number): ListProjectWebhookLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProjectWebhookLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withRepositoryId(repositoryId: number): ListProjectWebhookLogsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withUuid(uuid: string): ListProjectWebhookLogsRequest {
        this['uuid'] = uuid;
        return this;
    }
    public withCreatedAfter(createdAfter: Date): ListProjectWebhookLogsRequest {
        this['created_after'] = createdAfter;
        return this;
    }
    public set createdAfter(createdAfter: Date  | undefined) {
        this['created_after'] = createdAfter;
    }
    public get createdAfter(): Date | undefined {
        return this['created_after'];
    }
    public withCreatedBefore(createdBefore: Date): ListProjectWebhookLogsRequest {
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