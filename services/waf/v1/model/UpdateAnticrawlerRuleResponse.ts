import { AnticrawlerCondition } from './AnticrawlerCondition';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAnticrawlerRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public conditions?: Array<AnticrawlerCondition>;
    public name?: string;
    public type?: UpdateAnticrawlerRuleResponseTypeEnum | string;
    public timestamp?: number;
    public status?: number;
    public priority?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateAnticrawlerRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): UpdateAnticrawlerRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withConditions(conditions: Array<AnticrawlerCondition>): UpdateAnticrawlerRuleResponse {
        this['conditions'] = conditions;
        return this;
    }
    public withName(name: string): UpdateAnticrawlerRuleResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: UpdateAnticrawlerRuleResponseTypeEnum | string): UpdateAnticrawlerRuleResponse {
        this['type'] = type;
        return this;
    }
    public withTimestamp(timestamp: number): UpdateAnticrawlerRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withStatus(status: number): UpdateAnticrawlerRuleResponse {
        this['status'] = status;
        return this;
    }
    public withPriority(priority: number): UpdateAnticrawlerRuleResponse {
        this['priority'] = priority;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAnticrawlerRuleResponseTypeEnum {
    ANTICRAWLER_EXCEPT_URL = 'anticrawler_except_url',
    ANTICRAWLER_SPECIFIC_URL = 'anticrawler_specific_url'
}
