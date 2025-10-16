import { BatchCreateAntileakageRuleRequestBodyAction } from './BatchCreateAntileakageRuleRequestBodyAction';


export class BatchCreateAntileakageRuleRequestBody {
    public url?: string;
    public category?: BatchCreateAntileakageRuleRequestBodyCategoryEnum | string;
    public contents?: Array<string>;
    public action?: BatchCreateAntileakageRuleRequestBodyAction;
    public description?: string;
    private 'policy_ids'?: Array<string>;
    public constructor(url?: string, category?: string, contents?: Array<string>) { 
        this['url'] = url;
        this['category'] = category;
        this['contents'] = contents;
    }
    public withUrl(url: string): BatchCreateAntileakageRuleRequestBody {
        this['url'] = url;
        return this;
    }
    public withCategory(category: BatchCreateAntileakageRuleRequestBodyCategoryEnum | string): BatchCreateAntileakageRuleRequestBody {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): BatchCreateAntileakageRuleRequestBody {
        this['contents'] = contents;
        return this;
    }
    public withAction(action: BatchCreateAntileakageRuleRequestBodyAction): BatchCreateAntileakageRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withDescription(description: string): BatchCreateAntileakageRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withPolicyIds(policyIds: Array<string>): BatchCreateAntileakageRuleRequestBody {
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
export enum BatchCreateAntileakageRuleRequestBodyCategoryEnum {
    CODE = 'code',
    SENSITIVE = 'sensitive'
}
