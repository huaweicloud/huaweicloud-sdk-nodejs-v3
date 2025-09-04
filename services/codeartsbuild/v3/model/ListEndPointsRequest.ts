

export class ListEndPointsRequest {
    private 'project_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(projectId?: string, limit?: number) { 
        this['project_id'] = projectId;
        this['limit'] = limit;
    }
    public withProjectId(projectId: string): ListEndPointsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLimit(limit: number): ListEndPointsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListEndPointsRequest {
        this['offset'] = offset;
        return this;
    }
}