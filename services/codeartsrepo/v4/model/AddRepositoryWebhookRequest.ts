import { WebhookParamsDto } from './WebhookParamsDto';


export class AddRepositoryWebhookRequest {
    private 'repository_id'?: number;
    public body?: WebhookParamsDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): AddRepositoryWebhookRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: WebhookParamsDto): AddRepositoryWebhookRequest {
        this['body'] = body;
        return this;
    }
}