

export class ListEnvironmentsRequest {
    private 'project_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string, offset?: number, limit?: number) { 
        this['project_id'] = projectId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withProjectId(projectId: string): ListEnvironmentsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOffset(offset: number): ListEnvironmentsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEnvironmentsRequest {
        this['limit'] = limit;
        return this;
    }
}