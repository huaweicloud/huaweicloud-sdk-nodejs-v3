

export class ShowIpdFieldsV2Request {
    private 'project_id'?: string;
    private 'category_id'?: string;
    private 'category_layer_id'?: string;
    private 'target_project_id'?: string;
    public constructor(projectId?: string, categoryId?: string) { 
        this['project_id'] = projectId;
        this['category_id'] = categoryId;
    }
    public withProjectId(projectId: string): ShowIpdFieldsV2Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCategoryId(categoryId: string): ShowIpdFieldsV2Request {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: string  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): string | undefined {
        return this['category_id'];
    }
    public withCategoryLayerId(categoryLayerId: string): ShowIpdFieldsV2Request {
        this['category_layer_id'] = categoryLayerId;
        return this;
    }
    public set categoryLayerId(categoryLayerId: string  | undefined) {
        this['category_layer_id'] = categoryLayerId;
    }
    public get categoryLayerId(): string | undefined {
        return this['category_layer_id'];
    }
    public withTargetProjectId(targetProjectId: string): ShowIpdFieldsV2Request {
        this['target_project_id'] = targetProjectId;
        return this;
    }
    public set targetProjectId(targetProjectId: string  | undefined) {
        this['target_project_id'] = targetProjectId;
    }
    public get targetProjectId(): string | undefined {
        return this['target_project_id'];
    }
}