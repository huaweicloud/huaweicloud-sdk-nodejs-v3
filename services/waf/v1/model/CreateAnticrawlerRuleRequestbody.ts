import { AnticrawlerCondition } from './AnticrawlerCondition';


export class CreateAnticrawlerRuleRequestbody {
    public conditions: Array<AnticrawlerCondition>;
    public name: string;
    public type: string;
    public priority: number;
    public constructor(conditions?: any, name?: any, type?: any, priority?: any) { 
        this['conditions'] = conditions;
        this['name'] = name;
        this['type'] = type;
        this['priority'] = priority;
    }
    public withConditions(conditions: Array<AnticrawlerCondition>): CreateAnticrawlerRuleRequestbody {
        this['conditions'] = conditions;
        return this;
    }
    public withName(name: string): CreateAnticrawlerRuleRequestbody {
        this['name'] = name;
        return this;
    }
    public withType(type: string): CreateAnticrawlerRuleRequestbody {
        this['type'] = type;
        return this;
    }
    public withPriority(priority: number): CreateAnticrawlerRuleRequestbody {
        this['priority'] = priority;
        return this;
    }
}