import { AnticrawlerCondition } from './AnticrawlerCondition';


export class AnticrawlerRule {
    public id?: string;
    public policyid?: string;
    public conditions?: Array<AnticrawlerCondition>;
    public name?: string;
    public type?: AnticrawlerRuleTypeEnum | string;
    public timestamp?: number;
    public status?: number;
    public priority?: number;
    public constructor() { 
    }
    public withId(id: string): AnticrawlerRule {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): AnticrawlerRule {
        this['policyid'] = policyid;
        return this;
    }
    public withConditions(conditions: Array<AnticrawlerCondition>): AnticrawlerRule {
        this['conditions'] = conditions;
        return this;
    }
    public withName(name: string): AnticrawlerRule {
        this['name'] = name;
        return this;
    }
    public withType(type: AnticrawlerRuleTypeEnum | string): AnticrawlerRule {
        this['type'] = type;
        return this;
    }
    public withTimestamp(timestamp: number): AnticrawlerRule {
        this['timestamp'] = timestamp;
        return this;
    }
    public withStatus(status: number): AnticrawlerRule {
        this['status'] = status;
        return this;
    }
    public withPriority(priority: number): AnticrawlerRule {
        this['priority'] = priority;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AnticrawlerRuleTypeEnum {
    ANTICRAWLER_EXCEPT_URL = 'anticrawler_except_url',
    ANTICRAWLER_SPECIFIC_URL = 'anticrawler_specific_url'
}
