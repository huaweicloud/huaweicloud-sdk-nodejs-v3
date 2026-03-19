import { BatchUpdateCustomRulesRequestBodyPolicyRuleIds } from './BatchUpdateCustomRulesRequestBodyPolicyRuleIds';
import { CustomAction } from './CustomAction';
import { CustomRuleConditions } from './CustomRuleConditions';


export class BatchUpdateCustomRulesRequestBody {
    public name?: string;
    public description?: string;
    public status?: number;
    public conditions?: Array<CustomRuleConditions>;
    public action?: CustomAction;
    private 'action_mode'?: boolean;
    public priority?: number;
    public time?: boolean;
    public start?: number;
    public terminal?: number;
    public producer?: number;
    private 'policy_rule_ids'?: Array<BatchUpdateCustomRulesRequestBodyPolicyRuleIds>;
    public constructor(policyRuleIds?: Array<BatchUpdateCustomRulesRequestBodyPolicyRuleIds>) { 
        this['policy_rule_ids'] = policyRuleIds;
    }
    public withName(name: string): BatchUpdateCustomRulesRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): BatchUpdateCustomRulesRequestBody {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): BatchUpdateCustomRulesRequestBody {
        this['status'] = status;
        return this;
    }
    public withConditions(conditions: Array<CustomRuleConditions>): BatchUpdateCustomRulesRequestBody {
        this['conditions'] = conditions;
        return this;
    }
    public withAction(action: CustomAction): BatchUpdateCustomRulesRequestBody {
        this['action'] = action;
        return this;
    }
    public withActionMode(actionMode: boolean): BatchUpdateCustomRulesRequestBody {
        this['action_mode'] = actionMode;
        return this;
    }
    public set actionMode(actionMode: boolean  | undefined) {
        this['action_mode'] = actionMode;
    }
    public get actionMode(): boolean | undefined {
        return this['action_mode'];
    }
    public withPriority(priority: number): BatchUpdateCustomRulesRequestBody {
        this['priority'] = priority;
        return this;
    }
    public withTime(time: boolean): BatchUpdateCustomRulesRequestBody {
        this['time'] = time;
        return this;
    }
    public withStart(start: number): BatchUpdateCustomRulesRequestBody {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): BatchUpdateCustomRulesRequestBody {
        this['terminal'] = terminal;
        return this;
    }
    public withProducer(producer: number): BatchUpdateCustomRulesRequestBody {
        this['producer'] = producer;
        return this;
    }
    public withPolicyRuleIds(policyRuleIds: Array<BatchUpdateCustomRulesRequestBodyPolicyRuleIds>): BatchUpdateCustomRulesRequestBody {
        this['policy_rule_ids'] = policyRuleIds;
        return this;
    }
    public set policyRuleIds(policyRuleIds: Array<BatchUpdateCustomRulesRequestBodyPolicyRuleIds>  | undefined) {
        this['policy_rule_ids'] = policyRuleIds;
    }
    public get policyRuleIds(): Array<BatchUpdateCustomRulesRequestBodyPolicyRuleIds> | undefined {
        return this['policy_rule_ids'];
    }
}