

export class CcrulesListInfoTagCondition {
    public category?: string;
    public contents?: Array<string>;
    public constructor() { 
    }
    public withCategory(category: string): CcrulesListInfoTagCondition {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): CcrulesListInfoTagCondition {
        this['contents'] = contents;
        return this;
    }
}