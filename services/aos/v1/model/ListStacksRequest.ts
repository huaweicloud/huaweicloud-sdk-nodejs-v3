

export class ListStacksRequest {
    private 'Client-Request-Id'?: string;
    private 'project_id'?: string;
    public marker?: string;
    public limit?: number;
    public constructor(clientRequestId?: string, projectId?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['project_id'] = projectId;
    }
    public withClientRequestId(clientRequestId: string): ListStacksRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withProjectId(projectId: string): ListStacksRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withMarker(marker: string): ListStacksRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListStacksRequest {
        this['limit'] = limit;
        return this;
    }
}