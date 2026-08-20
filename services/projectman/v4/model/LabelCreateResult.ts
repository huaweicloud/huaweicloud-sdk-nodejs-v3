

export class LabelCreateResult {
    public id?: string;
    private 'category_types'?: Array<string>;
    public color?: string;
    public title?: string;
    public constructor() { 
    }
    public withId(id: string): LabelCreateResult {
        this['id'] = id;
        return this;
    }
    public withCategoryTypes(categoryTypes: Array<string>): LabelCreateResult {
        this['category_types'] = categoryTypes;
        return this;
    }
    public set categoryTypes(categoryTypes: Array<string>  | undefined) {
        this['category_types'] = categoryTypes;
    }
    public get categoryTypes(): Array<string> | undefined {
        return this['category_types'];
    }
    public withColor(color: string): LabelCreateResult {
        this['color'] = color;
        return this;
    }
    public withTitle(title: string): LabelCreateResult {
        this['title'] = title;
        return this;
    }
}