

export class ListIpdProjectFieldsRequest {
    private 'project_id'?: string;
    public keyword?: string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListIpdProjectFieldsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withKeyword(keyword: string): ListIpdProjectFieldsRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withOffset(offset: number): ListIpdProjectFieldsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListIpdProjectFieldsRequest {
        this['limit'] = limit;
        return this;
    }
}