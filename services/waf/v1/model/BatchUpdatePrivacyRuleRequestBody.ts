import { BatchUpdatePrivacyRuleRequestBodyPolicyRuleIds } from './BatchUpdatePrivacyRuleRequestBodyPolicyRuleIds';


export class BatchUpdatePrivacyRuleRequestBody {
    public url?: string;
    public category?: BatchUpdatePrivacyRuleRequestBodyCategoryEnum | string;
    public index?: string;
    public description?: string;
    private 'policy_rule_ids'?: Array<BatchUpdatePrivacyRuleRequestBodyPolicyRuleIds>;
    public constructor(url?: string, category?: string, index?: string, policyRuleIds?: Array<BatchUpdatePrivacyRuleRequestBodyPolicyRuleIds>) { 
        this['url'] = url;
        this['category'] = category;
        this['index'] = index;
        this['policy_rule_ids'] = policyRuleIds;
    }
    public withUrl(url: string): BatchUpdatePrivacyRuleRequestBody {
        this['url'] = url;
        return this;
    }
    public withCategory(category: BatchUpdatePrivacyRuleRequestBodyCategoryEnum | string): BatchUpdatePrivacyRuleRequestBody {
        this['category'] = category;
        return this;
    }
    public withIndex(index: string): BatchUpdatePrivacyRuleRequestBody {
        this['index'] = index;
        return this;
    }
    public withDescription(description: string): BatchUpdatePrivacyRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withPolicyRuleIds(policyRuleIds: Array<BatchUpdatePrivacyRuleRequestBodyPolicyRuleIds>): BatchUpdatePrivacyRuleRequestBody {
        this['policy_rule_ids'] = policyRuleIds;
        return this;
    }
    public set policyRuleIds(policyRuleIds: Array<BatchUpdatePrivacyRuleRequestBodyPolicyRuleIds>  | undefined) {
        this['policy_rule_ids'] = policyRuleIds;
    }
    public get policyRuleIds(): Array<BatchUpdatePrivacyRuleRequestBodyPolicyRuleIds> | undefined {
        return this['policy_rule_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdatePrivacyRuleRequestBodyCategoryEnum {
    PARAMS = 'params',
    COOKIE = 'cookie',
    HEADER = 'header',
    FORM = 'form'
}
