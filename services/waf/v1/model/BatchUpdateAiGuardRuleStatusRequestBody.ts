

export class BatchUpdateAiGuardRuleStatusRequestBody {
    private 'rule_ids'?: Array<string>;
    public status?: BatchUpdateAiGuardRuleStatusRequestBodyStatusEnum | string;
    private 'template_ids'?: Array<string>;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withRuleIds(ruleIds: Array<string>): BatchUpdateAiGuardRuleStatusRequestBody {
        this['rule_ids'] = ruleIds;
        return this;
    }
    public set ruleIds(ruleIds: Array<string>  | undefined) {
        this['rule_ids'] = ruleIds;
    }
    public get ruleIds(): Array<string> | undefined {
        return this['rule_ids'];
    }
    public withStatus(status: BatchUpdateAiGuardRuleStatusRequestBodyStatusEnum | string): BatchUpdateAiGuardRuleStatusRequestBody {
        this['status'] = status;
        return this;
    }
    public withTemplateIds(templateIds: Array<string>): BatchUpdateAiGuardRuleStatusRequestBody {
        this['template_ids'] = templateIds;
        return this;
    }
    public set templateIds(templateIds: Array<string>  | undefined) {
        this['template_ids'] = templateIds;
    }
    public get templateIds(): Array<string> | undefined {
        return this['template_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdateAiGuardRuleStatusRequestBodyStatusEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
