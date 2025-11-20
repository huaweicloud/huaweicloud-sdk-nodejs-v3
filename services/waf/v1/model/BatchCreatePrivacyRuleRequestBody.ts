

export class BatchCreatePrivacyRuleRequestBody {
    public url?: string;
    public category?: BatchCreatePrivacyRuleRequestBodyCategoryEnum | string;
    public index?: string;
    public description?: string;
    private 'policy_ids'?: Array<string>;
    public constructor(url?: string, category?: string, index?: string, policyIds?: Array<string>) { 
        this['url'] = url;
        this['category'] = category;
        this['index'] = index;
        this['policy_ids'] = policyIds;
    }
    public withUrl(url: string): BatchCreatePrivacyRuleRequestBody {
        this['url'] = url;
        return this;
    }
    public withCategory(category: BatchCreatePrivacyRuleRequestBodyCategoryEnum | string): BatchCreatePrivacyRuleRequestBody {
        this['category'] = category;
        return this;
    }
    public withIndex(index: string): BatchCreatePrivacyRuleRequestBody {
        this['index'] = index;
        return this;
    }
    public withDescription(description: string): BatchCreatePrivacyRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withPolicyIds(policyIds: Array<string>): BatchCreatePrivacyRuleRequestBody {
        this['policy_ids'] = policyIds;
        return this;
    }
    public set policyIds(policyIds: Array<string>  | undefined) {
        this['policy_ids'] = policyIds;
    }
    public get policyIds(): Array<string> | undefined {
        return this['policy_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreatePrivacyRuleRequestBodyCategoryEnum {
    PARAMS = 'params',
    COOKIE = 'cookie',
    HEADER = 'header',
    FORM = 'form'
}
