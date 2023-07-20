

export class UpdatePrivacyRuleRequestBody {
    public url?: string;
    public category?: UpdatePrivacyRuleRequestBodyCategoryEnum | string;
    public index?: string;
    public description?: string;
    public constructor(url?: string, category?: string, index?: string) { 
        this['url'] = url;
        this['category'] = category;
        this['index'] = index;
    }
    public withUrl(url: string): UpdatePrivacyRuleRequestBody {
        this['url'] = url;
        return this;
    }
    public withCategory(category: UpdatePrivacyRuleRequestBodyCategoryEnum | string): UpdatePrivacyRuleRequestBody {
        this['category'] = category;
        return this;
    }
    public withIndex(index: string): UpdatePrivacyRuleRequestBody {
        this['index'] = index;
        return this;
    }
    public withDescription(description: string): UpdatePrivacyRuleRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatePrivacyRuleRequestBodyCategoryEnum {
    PARAMS = 'params',
    COOKIE = 'cookie',
    HEADER = 'header',
    FORM = 'form'
}
