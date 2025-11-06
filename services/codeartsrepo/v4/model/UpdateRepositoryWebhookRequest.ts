import { WebhookParamsDto } from './WebhookParamsDto';


export class UpdateRepositoryWebhookRequest {
    private 'repository_id'?: number;
    private 'hook_id'?: number;
    public body?: WebhookParamsDto;
    public constructor(repositoryId?: number, hookId?: number) { 
        this['repository_id'] = repositoryId;
        this['hook_id'] = hookId;
    }
    public withRepositoryId(repositoryId: number): UpdateRepositoryWebhookRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withHookId(hookId: number): UpdateRepositoryWebhookRequest {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: number  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): number | undefined {
        return this['hook_id'];
    }
    public withBody(body: WebhookParamsDto): UpdateRepositoryWebhookRequest {
        this['body'] = body;
        return this;
    }
}