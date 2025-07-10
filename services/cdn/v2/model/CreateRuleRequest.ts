import { Actions } from './Actions';
import { Conditions } from './Conditions';


export class CreateRuleRequest {
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
    public withName(name: string): CreateRuleRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CreateRuleRequest {
        this['status'] = status;
        return this;
    }
    public withPriority(priority: number): CreateRuleRequest {
        this['priority'] = priority;
        return this;
    }
    public withConditions(conditions: Conditions): CreateRuleRequest {
        this['conditions'] = conditions;
        return this;
    }
    public withActions(actions: Array<Actions>): CreateRuleRequest {
        this['actions'] = actions;
        return this;
    }
}