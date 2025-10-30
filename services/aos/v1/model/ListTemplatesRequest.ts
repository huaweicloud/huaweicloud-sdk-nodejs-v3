

export class ListTemplatesRequest {
    private 'Client-Request-Id'?: string;
    private 'project_id'?: string;
    public marker?: string;
    public limit?: number;
    public constructor(clientRequestId?: string, projectId?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['project_id'] = projectId;
    }
    public withClientRequestId(clientRequestId: string): ListTemplatesRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withProjectId(projectId: string): ListTemplatesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withMarker(marker: string): ListTemplatesRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}