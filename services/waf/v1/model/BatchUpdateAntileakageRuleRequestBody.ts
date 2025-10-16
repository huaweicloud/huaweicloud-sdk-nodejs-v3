import { BatchCreateAntileakageRuleRequestBodyAction } from './BatchCreateAntileakageRuleRequestBodyAction';
import { PolicyRuleIdRequestBodyPolicyRuleIds } from './PolicyRuleIdRequestBodyPolicyRuleIds';


export class BatchUpdateAntileakageRuleRequestBody {
    public url?: string;
    public category?: BatchUpdateAntileakageRuleRequestBodyCategoryEnum | string;
    public contents?: Array<string>;
    public action?: BatchCreateAntileakageRuleRequestBodyAction;
    public description?: string;
    private 'policy_rule_ids'?: Array<PolicyRuleIdRequestBodyPolicyRuleIds>;
    public constructor(url?: string, category?: string, contents?: Array<string>) { 
        this['url'] = url;
        this['category'] = category;
        this['contents'] = contents;
    }
    public withUrl(url: string): BatchUpdateAntileakageRuleRequestBody {
        this['url'] = url;
        return this;
    }
    public withCategory(category: BatchUpdateAntileakageRuleRequestBodyCategoryEnum | string): BatchUpdateAntileakageRuleRequestBody {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): BatchUpdateAntileakageRuleRequestBody {
        this['contents'] = contents;
        return this;
    }
    public withAction(action: BatchCreateAntileakageRuleRequestBodyAction): BatchUpdateAntileakageRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withDescription(description: string): BatchUpdateAntileakageRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withPolicyRuleIds(policyRuleIds: Array<PolicyRuleIdRequestBodyPolicyRuleIds>): BatchUpdateAntileakageRuleRequestBody {
        this['policy_rule_ids'] = policyRuleIds;
        return this;
    }
    public set policyRuleIds(policyRuleIds: Array<PolicyRuleIdRequestBodyPolicyRuleIds>  | undefined) {
        this['policy_rule_ids'] = policyRuleIds;
    }
    public get policyRuleIds(): Array<PolicyRuleIdRequestBodyPolicyRuleIds> | undefined {
        return this['policy_rule_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdateAntileakageRuleRequestBodyCategoryEnum {
    CODE = 'code',
    SENSITIVE = 'sensitive'
}
