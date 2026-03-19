import { Condition } from './Condition';
import { IgnoreAdvanced } from './IgnoreAdvanced';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateIgnoreRuleHitNumResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public url?: string;
    public rule?: string;
    public mode?: number;
    private 'url_logic'?: string;
    public conditions?: Array<Condition>;
    public advanced?: IgnoreAdvanced;
    public domain?: Array<string>;
    private 'update_time'?: number;
    private 'clear_time'?: number;
    private 'hit_num'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateIgnoreRuleHitNumResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): UpdateIgnoreRuleHitNumResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): UpdateIgnoreRuleHitNumResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): UpdateIgnoreRuleHitNumResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): UpdateIgnoreRuleHitNumResponse {
        this['status'] = status;
        return this;
    }
    public withUrl(url: string): UpdateIgnoreRuleHitNumResponse {
        this['url'] = url;
        return this;
    }
    public withRule(rule: string): UpdateIgnoreRuleHitNumResponse {
        this['rule'] = rule;
        return this;
    }
    public withMode(mode: number): UpdateIgnoreRuleHitNumResponse {
        this['mode'] = mode;
        return this;
    }
    public withUrlLogic(urlLogic: string): UpdateIgnoreRuleHitNumResponse {
        this['url_logic'] = urlLogic;
        return this;
    }
    public set urlLogic(urlLogic: string  | undefined) {
        this['url_logic'] = urlLogic;
    }
    public get urlLogic(): string | undefined {
        return this['url_logic'];
    }
    public withConditions(conditions: Array<Condition>): UpdateIgnoreRuleHitNumResponse {
        this['conditions'] = conditions;
        return this;
    }
    public withAdvanced(advanced: IgnoreAdvanced): UpdateIgnoreRuleHitNumResponse {
        this['advanced'] = advanced;
        return this;
    }
    public withDomain(domain: Array<string>): UpdateIgnoreRuleHitNumResponse {
        this['domain'] = domain;
        return this;
    }
    public withUpdateTime(updateTime: number): UpdateIgnoreRuleHitNumResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withClearTime(clearTime: number): UpdateIgnoreRuleHitNumResponse {
        this['clear_time'] = clearTime;
        return this;
    }
    public set clearTime(clearTime: number  | undefined) {
        this['clear_time'] = clearTime;
    }
    public get clearTime(): number | undefined {
        return this['clear_time'];
    }
    public withHitNum(hitNum: number): UpdateIgnoreRuleHitNumResponse {
        this['hit_num'] = hitNum;
        return this;
    }
    public set hitNum(hitNum: number  | undefined) {
        this['hit_num'] = hitNum;
    }
    public get hitNum(): number | undefined {
        return this['hit_num'];
    }
}