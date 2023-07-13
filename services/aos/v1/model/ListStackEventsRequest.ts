

export class ListStackEventsRequest {
    private 'Client-Request-Id': string | undefined;
    private 'project_id': string | undefined;
    private 'stack_name': string | undefined;
    private 'stack_id'?: string | undefined;
    private 'deployment_id'?: string | undefined;
    public filter?: string;
    public field?: string;
    public constructor(clientRequestId?: any, projectId?: any, stackName?: any) { 
        this['Client-Request-Id'] = clientRequestId;
        this['project_id'] = projectId;
        this['stack_name'] = stackName;
    }
    public withClientRequestId(clientRequestId: string): ListStackEventsRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId() {
        return this['Client-Request-Id'];
    }
    public withProjectId(projectId: string): ListStackEventsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withStackName(stackName: string): ListStackEventsRequest {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName() {
        return this['stack_name'];
    }
    public withStackId(stackId: string): ListStackEventsRequest {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId() {
        return this['stack_id'];
    }
    public withDeploymentId(deploymentId: string): ListStackEventsRequest {
        this['deployment_id'] = deploymentId;
        return this;
    }
    public set deploymentId(deploymentId: string | undefined) {
        this['deployment_id'] = deploymentId;
    }
    public get deploymentId() {
        return this['deployment_id'];
    }
    public withFilter(filter: string): ListStackEventsRequest {
        this['filter'] = filter;
        return this;
    }
    public withField(field: string): ListStackEventsRequest {
        this['field'] = field;
        return this;
    }
}