

export class ListRulesetsRequest {
    private 'project_id'?: string;
    public category?: string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListRulesetsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCategory(category: string): ListRulesetsRequest {
        this['category'] = category;
        return this;
    }
    public withOffset(offset: number): ListRulesetsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRulesetsRequest {
        this['limit'] = limit;
        return this;
    }
}