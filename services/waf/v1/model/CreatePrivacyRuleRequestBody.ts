

export class CreatePrivacyRuleRequestBody {
    public url?: string;
    public category?: CreatePrivacyRuleRequestBodyCategoryEnum | string;
    public index?: string;
    public description?: string;
    public constructor(url?: string, category?: string, index?: string) { 
        this['url'] = url;
        this['category'] = category;
        this['index'] = index;
    }
    public withUrl(url: string): CreatePrivacyRuleRequestBody {
        this['url'] = url;
        return this;
    }
    public withCategory(category: CreatePrivacyRuleRequestBodyCategoryEnum | string): CreatePrivacyRuleRequestBody {
        this['category'] = category;
        return this;
    }
    public withIndex(index: string): CreatePrivacyRuleRequestBody {
        this['index'] = index;
        return this;
    }
    public withDescription(description: string): CreatePrivacyRuleRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePrivacyRuleRequestBodyCategoryEnum {
    PARAMS = 'params',
    COOKIE = 'cookie',
    HEADER = 'header',
    FORM = 'form'
}
