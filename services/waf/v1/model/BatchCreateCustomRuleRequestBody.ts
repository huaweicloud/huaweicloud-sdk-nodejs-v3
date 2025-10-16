import { CustomAction } from './CustomAction';
import { CustomConditions } from './CustomConditions';


export class BatchCreateCustomRuleRequestBody {
    public time?: boolean;
    public start?: number;
    public terminal?: number;
    public description?: string;
    public conditions?: Array<CustomConditions>;
    public action?: CustomAction;
    public priority?: number;
    public name?: string;
    private 'policy_ids'?: Array<string>;
    public constructor(time?: boolean, conditions?: Array<CustomConditions>, action?: CustomAction, priority?: number, name?: string) { 
        this['time'] = time;
        this['conditions'] = conditions;
        this['action'] = action;
        this['priority'] = priority;
        this['name'] = name;
    }
    public withTime(time: boolean): BatchCreateCustomRuleRequestBody {
        this['time'] = time;
        return this;
    }
    public withStart(start: number): BatchCreateCustomRuleRequestBody {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): BatchCreateCustomRuleRequestBody {
        this['terminal'] = terminal;
        return this;
    }
    public withDescription(description: string): BatchCreateCustomRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withConditions(conditions: Array<CustomConditions>): BatchCreateCustomRuleRequestBody {
        this['conditions'] = conditions;
        return this;
    }
    public withAction(action: CustomAction): BatchCreateCustomRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withPriority(priority: number): BatchCreateCustomRuleRequestBody {
        this['priority'] = priority;
        return this;
    }
    public withName(name: string): BatchCreateCustomRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withPolicyIds(policyIds: Array<string>): BatchCreateCustomRuleRequestBody {
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