import { Actions } from './Actions';
import { Conditions } from './Conditions';


export class RuleResponse {
    private 'rule_id'?: string;
    public name?: string;
    public status?: string;
    public priority?: number;
    public conditions?: Conditions;
    public actions?: Array<Actions>;
    public constructor(ruleId?: string, name?: string, status?: string, priority?: number, conditions?: Conditions, actions?: Array<Actions>) { 
        this['rule_id'] = ruleId;
        this['name'] = name;
        this['status'] = status;
        this['priority'] = priority;
        this['conditions'] = conditions;
        this['actions'] = actions;
    }
    public withRuleId(ruleId: string): RuleResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withName(name: string): RuleResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): RuleResponse {
        this['status'] = status;
        return this;
    }
    public withPriority(priority: number): RuleResponse {
        this['priority'] = priority;
        return this;
    }
    public withConditions(conditions: Conditions): RuleResponse {
        this['conditions'] = conditions;
        return this;
    }
    public withActions(actions: Array<Actions>): RuleResponse {
        this['actions'] = actions;
        return this;
    }
}