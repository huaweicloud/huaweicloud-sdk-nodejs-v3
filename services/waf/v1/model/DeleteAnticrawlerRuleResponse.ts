import { AnticrawlerCondition } from './AnticrawlerCondition';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAnticrawlerRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public conditions?: Array<AnticrawlerCondition>;
    public name?: string;
    public type?: DeleteAnticrawlerRuleResponseTypeEnum | string;
    public timestamp?: number;
    public status?: number;
    public priority?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteAnticrawlerRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): DeleteAnticrawlerRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withConditions(conditions: Array<AnticrawlerCondition>): DeleteAnticrawlerRuleResponse {
        this['conditions'] = conditions;
        return this;
    }
    public withName(name: string): DeleteAnticrawlerRuleResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: DeleteAnticrawlerRuleResponseTypeEnum | string): DeleteAnticrawlerRuleResponse {
        this['type'] = type;
        return this;
    }
    public withTimestamp(timestamp: number): DeleteAnticrawlerRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withStatus(status: number): DeleteAnticrawlerRuleResponse {
        this['status'] = status;
        return this;
    }
    public withPriority(priority: number): DeleteAnticrawlerRuleResponse {
        this['priority'] = priority;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteAnticrawlerRuleResponseTypeEnum {
    ANTICRAWLER_EXCEPT_URL = 'anticrawler_except_url',
    ANTICRAWLER_SPECIFIC_URL = 'anticrawler_specific_url'
}
