

export class CreateAntileakageRuleRequestBody {
    public url: string;
    public category: CreateAntileakageRuleRequestBodyCategoryEnum;
    public contents: Array<string>;
    public description?: string;
    public constructor(url?: any, category?: any, contents?: any) { 
        this['url'] = url;
        this['category'] = category;
        this['contents'] = contents;
    }
    public withUrl(url: string): CreateAntileakageRuleRequestBody {
        this['url'] = url;
        return this;
    }
    public withCategory(category: CreateAntileakageRuleRequestBodyCategoryEnum): CreateAntileakageRuleRequestBody {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): CreateAntileakageRuleRequestBody {
        this['contents'] = contents;
        return this;
    }
    public withDescription(description: string): CreateAntileakageRuleRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAntileakageRuleRequestBodyCategoryEnum {
    CODE = 'code',
    SENSITIVE = 'sensitive'
}
