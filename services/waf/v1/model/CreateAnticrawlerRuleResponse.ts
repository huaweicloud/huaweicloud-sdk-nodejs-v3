import { AnticrawlerCondition } from './AnticrawlerCondition';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAnticrawlerRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public conditions?: Array<AnticrawlerCondition>;
    public name?: string;
    public type?: CreateAnticrawlerRuleResponseTypeEnum | string;
    public timestamp?: number;
    public status?: number;
    public priority?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateAnticrawlerRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): CreateAnticrawlerRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withConditions(conditions: Array<AnticrawlerCondition>): CreateAnticrawlerRuleResponse {
        this['conditions'] = conditions;
        return this;
    }
    public withName(name: string): CreateAnticrawlerRuleResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateAnticrawlerRuleResponseTypeEnum | string): CreateAnticrawlerRuleResponse {
        this['type'] = type;
        return this;
    }
    public withTimestamp(timestamp: number): CreateAnticrawlerRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withStatus(status: number): CreateAnticrawlerRuleResponse {
        this['status'] = status;
        return this;
    }
    public withPriority(priority: number): CreateAnticrawlerRuleResponse {
        this['priority'] = priority;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAnticrawlerRuleResponseTypeEnum {
    ANTICRAWLER_EXCEPT_URL = 'anticrawler_except_url',
    ANTICRAWLER_SPECIFIC_URL = 'anticrawler_specific_url'
}
