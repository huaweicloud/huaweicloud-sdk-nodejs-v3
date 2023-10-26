import { ActionRule } from './ActionRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListActionRuleResponse extends SdkResponse {
    private 'action_rules'?: Array<ActionRule>;
    public constructor() { 
        super();
    }
    public withActionRules(actionRules: Array<ActionRule>): ListActionRuleResponse {
        this['action_rules'] = actionRules;
        return this;
    }
    public set actionRules(actionRules: Array<ActionRule>  | undefined) {
        this['action_rules'] = actionRules;
    }
    public get actionRules(): Array<ActionRule> | undefined {
        return this['action_rules'];
    }
}