

export class LabelUpdateResult {
    private 'category_types'?: Array<string>;
    public color?: string;
    public title?: string;
    public constructor() { 
    }
    public withCategoryTypes(categoryTypes: Array<string>): LabelUpdateResult {
        this['category_types'] = categoryTypes;
        return this;
    }
    public set categoryTypes(categoryTypes: Array<string>  | undefined) {
        this['category_types'] = categoryTypes;
    }
    public get categoryTypes(): Array<string> | undefined {
        return this['category_types'];
    }
    public withColor(color: string): LabelUpdateResult {
        this['color'] = color;
        return this;
    }
    public withTitle(title: string): LabelUpdateResult {
        this['title'] = title;
        return this;
    }
}