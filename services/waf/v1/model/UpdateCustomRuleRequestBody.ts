import { CustomAction } from './CustomAction';
import { CustomConditions } from './CustomConditions';


export class UpdateCustomRuleRequestBody {
    public name?: string;
    public time?: boolean;
    public start?: number;
    public terminal?: number;
    public description?: string;
    public conditions?: Array<CustomConditions>;
    public action?: CustomAction;
    public priority?: number;
    public constructor(name?: string, time?: boolean, conditions?: Array<CustomConditions>, action?: CustomAction, priority?: number) { 
        this['name'] = name;
        this['time'] = time;
        this['conditions'] = conditions;
        this['action'] = action;
        this['priority'] = priority;
    }
    public withName(name: string): UpdateCustomRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withTime(time: boolean): UpdateCustomRuleRequestBody {
        this['time'] = time;
        return this;
    }
    public withStart(start: number): UpdateCustomRuleRequestBody {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): UpdateCustomRuleRequestBody {
        this['terminal'] = terminal;
        return this;
    }
    public withDescription(description: string): UpdateCustomRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withConditions(conditions: Array<CustomConditions>): UpdateCustomRuleRequestBody {
        this['conditions'] = conditions;
        return this;
    }
    public withAction(action: CustomAction): UpdateCustomRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withPriority(priority: number): UpdateCustomRuleRequestBody {
        this['priority'] = priority;
        return this;
    }
}