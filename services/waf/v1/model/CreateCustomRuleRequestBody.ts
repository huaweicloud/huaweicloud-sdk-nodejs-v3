import { CustomAction } from './CustomAction';
import { CustomConditions } from './CustomConditions';


export class CreateCustomRuleRequestBody {
    public time?: boolean;
    public start?: number;
    public terminal?: number;
    public description?: string;
    public conditions?: Array<CustomConditions>;
    public action?: CustomAction;
    public priority?: number;
    public name?: string;
    public constructor(time?: boolean, conditions?: Array<CustomConditions>, action?: CustomAction, priority?: number, name?: string) { 
        this['time'] = time;
        this['conditions'] = conditions;
        this['action'] = action;
        this['priority'] = priority;
        this['name'] = name;
    }
    public withTime(time: boolean): CreateCustomRuleRequestBody {
        this['time'] = time;
        return this;
    }
    public withStart(start: number): CreateCustomRuleRequestBody {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): CreateCustomRuleRequestBody {
        this['terminal'] = terminal;
        return this;
    }
    public withDescription(description: string): CreateCustomRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withConditions(conditions: Array<CustomConditions>): CreateCustomRuleRequestBody {
        this['conditions'] = conditions;
        return this;
    }
    public withAction(action: CustomAction): CreateCustomRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withPriority(priority: number): CreateCustomRuleRequestBody {
        this['priority'] = priority;
        return this;
    }
    public withName(name: string): CreateCustomRuleRequestBody {
        this['name'] = name;
        return this;
    }
}