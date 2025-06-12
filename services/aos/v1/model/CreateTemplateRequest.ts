import { CreateTemplateRequestBody } from './CreateTemplateRequestBody';


export class CreateTemplateRequest {
    private 'Client-Request-Id'?: string;
    private 'project_id'?: string;
    public body?: CreateTemplateRequestBody;
    public constructor(clientRequestId?: string, projectId?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['project_id'] = projectId;
    }
    public withClientRequestId(clientRequestId: string): CreateTemplateRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withProjectId(projectId: string): CreateTemplateRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateTemplateRequestBody): CreateTemplateRequest {
        this['body'] = body;
        return this;
    }
}