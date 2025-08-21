

export class WebhookLogDto {
    public id?: number;
    private 'web_hook_id'?: number;
    public trigger?: string;
    public url?: string;
    private 'response_status'?: string;
    private 'execution_duration'?: number;
    public uuid?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: number): WebhookLogDto {
        this['id'] = id;
        return this;
    }
    public withWebHookId(webHookId: number): WebhookLogDto {
        this['web_hook_id'] = webHookId;
        return this;
    }
    public set webHookId(webHookId: number  | undefined) {
        this['web_hook_id'] = webHookId;
    }
    public get webHookId(): number | undefined {
        return this['web_hook_id'];
    }
    public withTrigger(trigger: string): WebhookLogDto {
        this['trigger'] = trigger;
        return this;
    }
    public withUrl(url: string): WebhookLogDto {
        this['url'] = url;
        return this;
    }
    public withResponseStatus(responseStatus: string): WebhookLogDto {
        this['response_status'] = responseStatus;
        return this;
    }
    public set responseStatus(responseStatus: string  | undefined) {
        this['response_status'] = responseStatus;
    }
    public get responseStatus(): string | undefined {
        return this['response_status'];
    }
    public withExecutionDuration(executionDuration: number): WebhookLogDto {
        this['execution_duration'] = executionDuration;
        return this;
    }
    public set executionDuration(executionDuration: number  | undefined) {
        this['execution_duration'] = executionDuration;
    }
    public get executionDuration(): number | undefined {
        return this['execution_duration'];
    }
    public withUuid(uuid: string): WebhookLogDto {
        this['uuid'] = uuid;
        return this;
    }
    public withCreatedAt(createdAt: string): WebhookLogDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): WebhookLogDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}