import { CcCondition } from './CcCondition';
import { CcrulesListInfoAction } from './CcrulesListInfoAction';
import { CcrulesListInfoTagCondition } from './CcrulesListInfoTagCondition';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCcRuleResponse extends SdkResponse {
    public name?: string;
    public id?: string;
    public policyid?: string;
    public url?: string;
    public prefix?: boolean;
    public mode?: number;
    public conditions?: Array<CcCondition>;
    public action?: CcrulesListInfoAction;
    private 'tag_type'?: UpdateCcRuleResponseTagTypeEnum | undefined;
    private 'tag_index'?: string | undefined;
    private 'tag_condition'?: CcrulesListInfoTagCondition | undefined;
    private 'limit_num'?: number | undefined;
    private 'limit_period'?: number | undefined;
    private 'unlock_num'?: number | undefined;
    private 'lock_time'?: number | undefined;
    private 'domain_aggregation'?: boolean | undefined;
    private 'region_aggregation'?: boolean | undefined;
    public description?: string;
    private 'total_num'?: number | undefined;
    public unaggregation?: boolean;
    private 'aging_time'?: number | undefined;
    public producer?: number;
    public constructor() { 
        super();
    }
    public withName(name: string): UpdateCcRuleResponse {
        this['name'] = name;
        return this;
    }
    public withId(id: string): UpdateCcRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): UpdateCcRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withUrl(url: string): UpdateCcRuleResponse {
        this['url'] = url;
        return this;
    }
    public withPrefix(prefix: boolean): UpdateCcRuleResponse {
        this['prefix'] = prefix;
        return this;
    }
    public withMode(mode: number): UpdateCcRuleResponse {
        this['mode'] = mode;
        return this;
    }
    public withConditions(conditions: Array<CcCondition>): UpdateCcRuleResponse {
        this['conditions'] = conditions;
        return this;
    }
    public withAction(action: CcrulesListInfoAction): UpdateCcRuleResponse {
        this['action'] = action;
        return this;
    }
    public withTagType(tagType: UpdateCcRuleResponseTagTypeEnum): UpdateCcRuleResponse {
        this['tag_type'] = tagType;
        return this;
    }
    public set tagType(tagType: UpdateCcRuleResponseTagTypeEnum | undefined) {
        this['tag_type'] = tagType;
    }
    public get tagType() {
        return this['tag_type'];
    }
    public withTagIndex(tagIndex: string): UpdateCcRuleResponse {
        this['tag_index'] = tagIndex;
        return this;
    }
    public set tagIndex(tagIndex: string | undefined) {
        this['tag_index'] = tagIndex;
    }
    public get tagIndex() {
        return this['tag_index'];
    }
    public withTagCondition(tagCondition: CcrulesListInfoTagCondition): UpdateCcRuleResponse {
        this['tag_condition'] = tagCondition;
        return this;
    }
    public set tagCondition(tagCondition: CcrulesListInfoTagCondition | undefined) {
        this['tag_condition'] = tagCondition;
    }
    public get tagCondition() {
        return this['tag_condition'];
    }
    public withLimitNum(limitNum: number): UpdateCcRuleResponse {
        this['limit_num'] = limitNum;
        return this;
    }
    public set limitNum(limitNum: number | undefined) {
        this['limit_num'] = limitNum;
    }
    public get limitNum() {
        return this['limit_num'];
    }
    public withLimitPeriod(limitPeriod: number): UpdateCcRuleResponse {
        this['limit_period'] = limitPeriod;
        return this;
    }
    public set limitPeriod(limitPeriod: number | undefined) {
        this['limit_period'] = limitPeriod;
    }
    public get limitPeriod() {
        return this['limit_period'];
    }
    public withUnlockNum(unlockNum: number): UpdateCcRuleResponse {
        this['unlock_num'] = unlockNum;
        return this;
    }
    public set unlockNum(unlockNum: number | undefined) {
        this['unlock_num'] = unlockNum;
    }
    public get unlockNum() {
        return this['unlock_num'];
    }
    public withLockTime(lockTime: number): UpdateCcRuleResponse {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: number | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime() {
        return this['lock_time'];
    }
    public withDomainAggregation(domainAggregation: boolean): UpdateCcRuleResponse {
        this['domain_aggregation'] = domainAggregation;
        return this;
    }
    public set domainAggregation(domainAggregation: boolean | undefined) {
        this['domain_aggregation'] = domainAggregation;
    }
    public get domainAggregation() {
        return this['domain_aggregation'];
    }
    public withRegionAggregation(regionAggregation: boolean): UpdateCcRuleResponse {
        this['region_aggregation'] = regionAggregation;
        return this;
    }
    public set regionAggregation(regionAggregation: boolean | undefined) {
        this['region_aggregation'] = regionAggregation;
    }
    public get regionAggregation() {
        return this['region_aggregation'];
    }
    public withDescription(description: string): UpdateCcRuleResponse {
        this['description'] = description;
        return this;
    }
    public withTotalNum(totalNum: number): UpdateCcRuleResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum() {
        return this['total_num'];
    }
    public withUnaggregation(unaggregation: boolean): UpdateCcRuleResponse {
        this['unaggregation'] = unaggregation;
        return this;
    }
    public withAgingTime(agingTime: number): UpdateCcRuleResponse {
        this['aging_time'] = agingTime;
        return this;
    }
    public set agingTime(agingTime: number | undefined) {
        this['aging_time'] = agingTime;
    }
    public get agingTime() {
        return this['aging_time'];
    }
    public withProducer(producer: number): UpdateCcRuleResponse {
        this['producer'] = producer;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateCcRuleResponseTagTypeEnum {
    IP = 'ip',
    COOKIE = 'cookie',
    HEADER = 'header',
    OTHER = 'other',
    POLICY = 'policy',
    DOMAIN = 'domain',
    URL = 'url'
}
