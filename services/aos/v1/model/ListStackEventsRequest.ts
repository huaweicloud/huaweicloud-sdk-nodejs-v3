

export class ListStackEventsRequest {
    private 'Client-Request-Id'?: string;
    private 'project_id'?: string;
    private 'stack_name'?: string;
    private 'stack_id'?: string;
    private 'deployment_id'?: string;
    public filter?: string;
    public field?: string;
    public marker?: string;
    public limit?: number;
    public constructor(clientRequestId?: string, projectId?: string, stackName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['project_id'] = projectId;
        this['stack_name'] = stackName;
    }
    public withClientRequestId(clientRequestId: string): ListStackEventsRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withProjectId(projectId: string): ListStackEventsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStackName(stackName: string): ListStackEventsRequest {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string  | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName(): string | undefined {
        return this['stack_name'];
    }
    public withStackId(stackId: string): ListStackEventsRequest {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
    public withDeploymentId(deploymentId: string): ListStackEventsRequest {
        this['deployment_id'] = deploymentId;
        return this;
    }
    public set deploymentId(deploymentId: string  | undefined) {
        this['deployment_id'] = deploymentId;
    }
    public get deploymentId(): string | undefined {
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
    public withMarker(marker: string): ListStackEventsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListStackEventsRequest {
        this['limit'] = limit;
        return this;
    }
}