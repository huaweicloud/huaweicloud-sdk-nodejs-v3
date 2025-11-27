import { UpdateTemplateMetadataRequestBody } from './UpdateTemplateMetadataRequestBody';


export class UpdateTemplateMetadataRequest {
    private 'Client-Request-Id'?: string;
    private 'project_id'?: string;
    private 'template_name'?: string;
    public body?: UpdateTemplateMetadataRequestBody;
    public constructor(clientRequestId?: string, projectId?: string, templateName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['project_id'] = projectId;
        this['template_name'] = templateName;
    }
    public withClientRequestId(clientRequestId: string): UpdateTemplateMetadataRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withProjectId(projectId: string): UpdateTemplateMetadataRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTemplateName(templateName: string): UpdateTemplateMetadataRequest {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withBody(body: UpdateTemplateMetadataRequestBody): UpdateTemplateMetadataRequest {
        this['body'] = body;
        return this;
    }
}