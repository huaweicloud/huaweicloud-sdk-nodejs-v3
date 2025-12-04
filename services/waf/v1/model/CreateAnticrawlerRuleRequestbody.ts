import { AnticrawlerCondition } from './AnticrawlerCondition';


export class CreateAnticrawlerRuleRequestbody {
    public conditions?: Array<AnticrawlerCondition>;
    public name?: string;
    public type?: CreateAnticrawlerRuleRequestbodyTypeEnum | string;
    public priority?: number;
    public constructor(conditions?: Array<AnticrawlerCondition>, name?: string, type?: string, priority?: number) { 
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
    public withType(type: CreateAnticrawlerRuleRequestbodyTypeEnum | string): CreateAnticrawlerRuleRequestbody {
        this['type'] = type;
        return this;
    }
    public withPriority(priority: number): CreateAnticrawlerRuleRequestbody {
        this['priority'] = priority;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAnticrawlerRuleRequestbodyTypeEnum {
    ANTICRAWLER_EXCEPT_URL = 'anticrawler_except_url',
    ANTICRAWLER_SPECIFIC_URL = 'anticrawler_specific_url'
}
