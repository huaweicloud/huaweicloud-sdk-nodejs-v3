

export class DataCategoryUpdateDTO {
    private 'category_name'?: string;
    public description?: string;
    public constructor(categoryName?: string) { 
        this['category_name'] = categoryName;
    }
    public withCategoryName(categoryName: string): DataCategoryUpdateDTO {
        this['category_name'] = categoryName;
        return this;
    }
    public set categoryName(categoryName: string  | undefined) {
        this['category_name'] = categoryName;
    }
    public get categoryName(): string | undefined {
        return this['category_name'];
    }
    public withDescription(description: string): DataCategoryUpdateDTO {
        this['description'] = description;
        return this;
    }
}