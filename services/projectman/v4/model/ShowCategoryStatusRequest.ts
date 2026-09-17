

export class ShowCategoryStatusRequest {
    private 'project_id'?: string;
    public categories?: string;
    public constructor(projectId?: string, categories?: string) { 
        this['project_id'] = projectId;
        this['categories'] = categories;
    }
    public withProjectId(projectId: string): ShowCategoryStatusRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCategories(categories: string): ShowCategoryStatusRequest {
        this['categories'] = categories;
        return this;
    }
}