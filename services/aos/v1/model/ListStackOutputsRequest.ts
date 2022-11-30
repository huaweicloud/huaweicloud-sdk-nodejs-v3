

export class ListStackOutputsRequest {
    private 'Client-Request-Id': string | undefined;
    private 'project_id': string | undefined;
    private 'stack_name': string | undefined;
    private 'stack_id'?: string | undefined;
    public executor?: string;
    public limit?: number;
    public marker?: string;
    public constructor(clientRequestId?: any, projectId?: any, stackName?: any) { 
        this['Client-Request-Id'] = clientRequestId;
        this['project_id'] = projectId;
        this['stack_name'] = stackName;
    }
    public withClientRequestId(clientRequestId: string): ListStackOutputsRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId() {
        return this['Client-Request-Id'];
    }
    public withProjectId(projectId: string): ListStackOutputsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withStackName(stackName: string): ListStackOutputsRequest {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName() {
        return this['stack_name'];
    }
    public withStackId(stackId: string): ListStackOutputsRequest {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId() {
        return this['stack_id'];
    }
    public withExecutor(executor: string): ListStackOutputsRequest {
        this['executor'] = executor;
        return this;
    }
    public withLimit(limit: number): ListStackOutputsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListStackOutputsRequest {
        this['marker'] = marker;
        return this;
    }
}