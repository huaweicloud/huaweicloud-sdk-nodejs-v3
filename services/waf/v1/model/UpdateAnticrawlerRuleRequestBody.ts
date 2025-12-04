import { AnticrawlerCondition } from './AnticrawlerCondition';


export class UpdateAnticrawlerRuleRequestBody {
    public conditions?: Array<AnticrawlerCondition>;
    public name?: string;
    public type?: UpdateAnticrawlerRuleRequestBodyTypeEnum | string;
    public priority?: number;
    public constructor(conditions?: Array<AnticrawlerCondition>, name?: string, type?: string, priority?: number) { 
        this['conditions'] = conditions;
        this['name'] = name;
        this['type'] = type;
        this['priority'] = priority;
    }
    public withConditions(conditions: Array<AnticrawlerCondition>): UpdateAnticrawlerRuleRequestBody {
        this['conditions'] = conditions;
        return this;
    }
    public withName(name: string): UpdateAnticrawlerRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withType(type: UpdateAnticrawlerRuleRequestBodyTypeEnum | string): UpdateAnticrawlerRuleRequestBody {
        this['type'] = type;
        return this;
    }
    public withPriority(priority: number): UpdateAnticrawlerRuleRequestBody {
        this['priority'] = priority;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAnticrawlerRuleRequestBodyTypeEnum {
    ANTICRAWLER_EXCEPT_URL = 'anticrawler_except_url',
    ANTICRAWLER_SPECIFIC_URL = 'anticrawler_specific_url'
}
