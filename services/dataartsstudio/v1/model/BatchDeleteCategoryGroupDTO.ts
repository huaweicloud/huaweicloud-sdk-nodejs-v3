

export class BatchDeleteCategoryGroupDTO {
    private 'category_ids'?: Array<string>;
    public constructor(categoryIds?: Array<string>) { 
        this['category_ids'] = categoryIds;
    }
    public withCategoryIds(categoryIds: Array<string>): BatchDeleteCategoryGroupDTO {
        this['category_ids'] = categoryIds;
        return this;
    }
    public set categoryIds(categoryIds: Array<string>  | undefined) {
        this['category_ids'] = categoryIds;
    }
    public get categoryIds(): Array<string> | undefined {
        return this['category_ids'];
    }
}