

export class DataCategoryInsertDTO {
    private 'category_name'?: string;
    public description?: string;
    private 'parent_id'?: string;
    public constructor(categoryName?: string) { 
        this['category_name'] = categoryName;
    }
    public withCategoryName(categoryName: string): DataCategoryInsertDTO {
        this['category_name'] = categoryName;
        return this;
    }
    public set categoryName(categoryName: string  | undefined) {
        this['category_name'] = categoryName;
    }
    public get categoryName(): string | undefined {
        return this['category_name'];
    }
    public withDescription(description: string): DataCategoryInsertDTO {
        this['description'] = description;
        return this;
    }
    public withParentId(parentId: string): DataCategoryInsertDTO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
}