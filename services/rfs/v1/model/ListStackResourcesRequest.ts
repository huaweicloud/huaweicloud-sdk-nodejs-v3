

export class ListStackResourcesRequest {
    private 'Client-Request-Id'?: string;
    private 'project_id'?: string;
    private 'stack_name'?: string;
    private 'stack_id'?: string;
    public marker?: string;
    public limit?: number;
    public constructor(clientRequestId?: string, projectId?: string, stackName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['project_id'] = projectId;
        this['stack_name'] = stackName;
    }
    public withClientRequestId(clientRequestId: string): ListStackResourcesRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withProjectId(projectId: string): ListStackResourcesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStackName(stackName: string): ListStackResourcesRequest {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string  | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName(): string | undefined {
        return this['stack_name'];
    }
    public withStackId(stackId: string): ListStackResourcesRequest {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
    public withMarker(marker: string): ListStackResourcesRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListStackResourcesRequest {
        this['limit'] = limit;
        return this;
    }
}