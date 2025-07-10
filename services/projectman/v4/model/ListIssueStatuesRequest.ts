

export class ListIssueStatuesRequest {
    private 'project_id'?: string;
    private 'category_id'?: string;
    public constructor(projectId?: string, categoryId?: string) { 
        this['project_id'] = projectId;
        this['category_id'] = categoryId;
    }
    public withProjectId(projectId: string): ListIssueStatuesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCategoryId(categoryId: string): ListIssueStatuesRequest {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: string  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): string | undefined {
        return this['category_id'];
    }
}