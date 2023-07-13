

export class UpdateAntileakageRuleRequestBody {
    public url: string;
    public category: UpdateAntileakageRuleRequestBodyCategoryEnum;
    public contents: Array<string>;
    public description?: string;
    public constructor(url?: any, category?: any, contents?: any) { 
        this['url'] = url;
        this['category'] = category;
        this['contents'] = contents;
    }
    public withUrl(url: string): UpdateAntileakageRuleRequestBody {
        this['url'] = url;
        return this;
    }
    public withCategory(category: UpdateAntileakageRuleRequestBodyCategoryEnum): UpdateAntileakageRuleRequestBody {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): UpdateAntileakageRuleRequestBody {
        this['contents'] = contents;
        return this;
    }
    public withDescription(description: string): UpdateAntileakageRuleRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAntileakageRuleRequestBodyCategoryEnum {
    CODE = 'code',
    SENSITIVE = 'sensitive'
}
