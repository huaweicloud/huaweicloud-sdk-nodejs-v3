import { ContinueDeployStackRequestBody } from './ContinueDeployStackRequestBody';


export class ContinueDeployStackRequest {
    private 'Client-Request-Id': string | undefined;
    private 'project_id': string | undefined;
    private 'stack_name': string | undefined;
    public body?: ContinueDeployStackRequestBody;
    public constructor(clientRequestId?: any, projectId?: any, stackName?: any) { 
        this['Client-Request-Id'] = clientRequestId;
        this['project_id'] = projectId;
        this['stack_name'] = stackName;
    }
    public withClientRequestId(clientRequestId: string): ContinueDeployStackRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId() {
        return this['Client-Request-Id'];
    }
    public withProjectId(projectId: string): ContinueDeployStackRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withStackName(stackName: string): ContinueDeployStackRequest {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName() {
        return this['stack_name'];
    }
    public withBody(body: ContinueDeployStackRequestBody): ContinueDeployStackRequest {
        this['body'] = body;
        return this;
    }
}