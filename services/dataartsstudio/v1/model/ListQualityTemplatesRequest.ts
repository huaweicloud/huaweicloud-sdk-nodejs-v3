

export class ListQualityTemplatesRequest {
    private 'category_id'?: number;
    public name?: string;
    private 'system_template'?: boolean;
    public creator?: string;
    public limit?: number;
    public offset?: number;
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withCategoryId(categoryId: number): ListQualityTemplatesRequest {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): number | undefined {
        return this['category_id'];
    }
    public withName(name: string): ListQualityTemplatesRequest {
        this['name'] = name;
        return this;
    }
    public withSystemTemplate(systemTemplate: boolean): ListQualityTemplatesRequest {
        this['system_template'] = systemTemplate;
        return this;
    }
    public set systemTemplate(systemTemplate: boolean  | undefined) {
        this['system_template'] = systemTemplate;
    }
    public get systemTemplate(): boolean | undefined {
        return this['system_template'];
    }
    public withCreator(creator: string): ListQualityTemplatesRequest {
        this['creator'] = creator;
        return this;
    }
    public withLimit(limit: number): ListQualityTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListQualityTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withWorkspace(workspace: string): ListQualityTemplatesRequest {
        this['workspace'] = workspace;
        return this;
    }
}