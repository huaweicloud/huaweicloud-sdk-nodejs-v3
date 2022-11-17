import { ParseTemplateVariablesRequestBody } from './ParseTemplateVariablesRequestBody';


export class ParseTemplateVariablesRequest {
    private 'Client-Request-Id': string | undefined;
    private 'project_id': string | undefined;
    public body?: ParseTemplateVariablesRequestBody;
    public constructor(clientRequestId?: any, projectId?: any) { 
        this['Client-Request-Id'] = clientRequestId;
        this['project_id'] = projectId;
    }
    public withClientRequestId(clientRequestId: string): ParseTemplateVariablesRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId() {
        return this['Client-Request-Id'];
    }
    public withProjectId(projectId: string): ParseTemplateVariablesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBody(body: ParseTemplateVariablesRequestBody): ParseTemplateVariablesRequest {
        this['body'] = body;
        return this;
    }
}