import { AnticrawlerCondition } from './AnticrawlerCondition';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAnticrawlerRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public conditions?: Array<AnticrawlerCondition>;
    public name?: string;
    public type?: ShowAnticrawlerRuleResponseTypeEnum | string;
    public timestamp?: number;
    public status?: number;
    public priority?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowAnticrawlerRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): ShowAnticrawlerRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withConditions(conditions: Array<AnticrawlerCondition>): ShowAnticrawlerRuleResponse {
        this['conditions'] = conditions;
        return this;
    }
    public withName(name: string): ShowAnticrawlerRuleResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: ShowAnticrawlerRuleResponseTypeEnum | string): ShowAnticrawlerRuleResponse {
        this['type'] = type;
        return this;
    }
    public withTimestamp(timestamp: number): ShowAnticrawlerRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withStatus(status: number): ShowAnticrawlerRuleResponse {
        this['status'] = status;
        return this;
    }
    public withPriority(priority: number): ShowAnticrawlerRuleResponse {
        this['priority'] = priority;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAnticrawlerRuleResponseTypeEnum {
    ANTICRAWLER_EXCEPT_URL = 'anticrawler_except_url',
    ANTICRAWLER_SPECIFIC_URL = 'anticrawler_specific_url'
}
