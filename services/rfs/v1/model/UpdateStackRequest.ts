import { UpdateStackRequestBody } from './UpdateStackRequestBody';


export class UpdateStackRequest {
    private 'Client-Request-Id'?: string;
    private 'project_id'?: string;
    private 'stack_name'?: string;
    public body?: UpdateStackRequestBody;
    public constructor(clientRequestId?: string, projectId?: string, stackName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['project_id'] = projectId;
        this['stack_name'] = stackName;
    }
    public withClientRequestId(clientRequestId: string): UpdateStackRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withProjectId(projectId: string): UpdateStackRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStackName(stackName: string): UpdateStackRequest {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string  | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName(): string | undefined {
        return this['stack_name'];
    }
    public withBody(body: UpdateStackRequestBody): UpdateStackRequest {
        this['body'] = body;
        return this;
    }
}