import { WebhookParamsDto } from './WebhookParamsDto';


export class AddProjectWebhookRequest {
    private 'project_id'?: string;
    public body?: WebhookParamsDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): AddProjectWebhookRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: WebhookParamsDto): AddProjectWebhookRequest {
        this['body'] = body;
        return this;
    }
}