import { Actions } from './Actions';
import { Conditions } from './Conditions';


export class FullUpdateRuleRequest {
    private 'rule_id'?: string;
    public name?: string;
    public status?: string;
    public priority?: number;
    public conditions?: Conditions;
    public actions?: Array<Actions>;
    public constructor(name?: string, status?: string, priority?: number, conditions?: Conditions, actions?: Array<Actions>) { 
        this['name'] = name;
        this['status'] = status;
        this['priority'] = priority;
        this['conditions'] = conditions;
        this['actions'] = actions;
    }
    public withRuleId(ruleId: string): FullUpdateRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withName(name: string): FullUpdateRuleRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): FullUpdateRuleRequest {
        this['status'] = status;
        return this;
    }
    public withPriority(priority: number): FullUpdateRuleRequest {
        this['priority'] = priority;
        return this;
    }
    public withConditions(conditions: Conditions): FullUpdateRuleRequest {
        this['conditions'] = conditions;
        return this;
    }
    public withActions(actions: Array<Actions>): FullUpdateRuleRequest {
        this['actions'] = actions;
        return this;
    }
}