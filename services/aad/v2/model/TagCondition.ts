

export class TagCondition {
    public category?: string;
    public contents?: Array<string>;
    public constructor() { 
    }
    public withCategory(category: string): TagCondition {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): TagCondition {
        this['contents'] = contents;
        return this;
    }
}