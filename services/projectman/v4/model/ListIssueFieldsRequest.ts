

export class ListIssueFieldsRequest {
    private 'project_id'?: string;
    private 'category_id'?: string;
    public page?: number;
    public size?: number;
    public constructor(projectId?: string, categoryId?: string, page?: number, size?: number) { 
        this['project_id'] = projectId;
        this['category_id'] = categoryId;
        this['page'] = page;
        this['size'] = size;
    }
    public withProjectId(projectId: string): ListIssueFieldsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCategoryId(categoryId: string): ListIssueFieldsRequest {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: string  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): string | undefined {
        return this['category_id'];
    }
    public withPage(page: number): ListIssueFieldsRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListIssueFieldsRequest {
        this['size'] = size;
        return this;
    }
}