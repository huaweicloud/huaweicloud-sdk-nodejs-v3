

export class SensitiveDataCategoryOverviewQueryDTO {
    private 'root_id'?: string;
    private 'parent_id'?: string;
    private 'category_id'?: string;
    private 'category_name'?: string;
    private 'category_path'?: string;
    public count?: number;
    public children?: Array<SensitiveDataCategoryOverviewQueryDTO>;
    public constructor() { 
    }
    public withRootId(rootId: string): SensitiveDataCategoryOverviewQueryDTO {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: string  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): string | undefined {
        return this['root_id'];
    }
    public withParentId(parentId: string): SensitiveDataCategoryOverviewQueryDTO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withCategoryId(categoryId: string): SensitiveDataCategoryOverviewQueryDTO {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: string  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): string | undefined {
        return this['category_id'];
    }
    public withCategoryName(categoryName: string): SensitiveDataCategoryOverviewQueryDTO {
        this['category_name'] = categoryName;
        return this;
    }
    public set categoryName(categoryName: string  | undefined) {
        this['category_name'] = categoryName;
    }
    public get categoryName(): string | undefined {
        return this['category_name'];
    }
    public withCategoryPath(categoryPath: string): SensitiveDataCategoryOverviewQueryDTO {
        this['category_path'] = categoryPath;
        return this;
    }
    public set categoryPath(categoryPath: string  | undefined) {
        this['category_path'] = categoryPath;
    }
    public get categoryPath(): string | undefined {
        return this['category_path'];
    }
    public withCount(count: number): SensitiveDataCategoryOverviewQueryDTO {
        this['count'] = count;
        return this;
    }
    public withChildren(children: Array<SensitiveDataCategoryOverviewQueryDTO>): SensitiveDataCategoryOverviewQueryDTO {
        this['children'] = children;
        return this;
    }
}