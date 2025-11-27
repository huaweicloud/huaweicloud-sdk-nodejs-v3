import { CustomAction } from './CustomAction';
import { CustomRuleConditions } from './CustomRuleConditions';
import { PolicyRuleIdRequestBodyPolicyRuleIds } from './PolicyRuleIdRequestBodyPolicyRuleIds';


export class BatchUpdateCustomRuleRequestBody {
    public id?: string;
    public name?: string;
    public policyid?: string;
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
    private 'policy_rule_ids'?: Array<PolicyRuleIdRequestBodyPolicyRuleIds>;
    public constructor() { 
    }
    public withId(id: string): BatchUpdateCustomRuleRequestBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BatchUpdateCustomRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withPolicyid(policyid: string): BatchUpdateCustomRuleRequestBody {
        this['policyid'] = policyid;
        return this;
    }
    public withDescription(description: string): BatchUpdateCustomRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): BatchUpdateCustomRuleRequestBody {
        this['status'] = status;
        return this;
    }
    public withConditions(conditions: Array<CustomRuleConditions>): BatchUpdateCustomRuleRequestBody {
        this['conditions'] = conditions;
        return this;
    }
    public withAction(action: CustomAction): BatchUpdateCustomRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withActionMode(actionMode: boolean): BatchUpdateCustomRuleRequestBody {
        this['action_mode'] = actionMode;
        return this;
    }
    public set actionMode(actionMode: boolean  | undefined) {
        this['action_mode'] = actionMode;
    }
    public get actionMode(): boolean | undefined {
        return this['action_mode'];
    }
    public withPriority(priority: number): BatchUpdateCustomRuleRequestBody {
        this['priority'] = priority;
        return this;
    }
    public withTime(time: boolean): BatchUpdateCustomRuleRequestBody {
        this['time'] = time;
        return this;
    }
    public withStart(start: number): BatchUpdateCustomRuleRequestBody {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): BatchUpdateCustomRuleRequestBody {
        this['terminal'] = terminal;
        return this;
    }
    public withProducer(producer: number): BatchUpdateCustomRuleRequestBody {
        this['producer'] = producer;
        return this;
    }
    public withPolicyRuleIds(policyRuleIds: Array<PolicyRuleIdRequestBodyPolicyRuleIds>): BatchUpdateCustomRuleRequestBody {
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