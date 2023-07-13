import { CcCondition } from './CcCondition';
import { CcrulesListInfoTagCondition } from './CcrulesListInfoTagCondition';
import { CreateCcRuleRequestBodyAction } from './CreateCcRuleRequestBodyAction';


export class UpdateCcRuleRequestBody {
    public name?: string;
    public mode: number;
    public url?: string;
    public conditions: Array<CcCondition>;
    public action: CreateCcRuleRequestBodyAction;
    private 'tag_type': UpdateCcRuleRequestBodyTagTypeEnum | undefined;
    private 'tag_index'?: string | undefined;
    private 'tag_condition'?: CcrulesListInfoTagCondition | undefined;
    private 'limit_num': number | undefined;
    private 'limit_period': number | undefined;
    private 'unlock_num'?: number | undefined;
    private 'lock_time'?: number | undefined;
    private 'domain_aggregation'?: boolean | undefined;
    private 'region_aggregation'?: boolean | undefined;
    public description?: string;
    public constructor(mode?: any, conditions?: any, action?: any, tagType?: any, limitNum?: any, limitPeriod?: any) { 
        this['mode'] = mode;
        this['conditions'] = conditions;
        this['action'] = action;
        this['tag_type'] = tagType;
        this['limit_num'] = limitNum;
        this['limit_period'] = limitPeriod;
    }
    public withName(name: string): UpdateCcRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withMode(mode: number): UpdateCcRuleRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withUrl(url: string): UpdateCcRuleRequestBody {
        this['url'] = url;
        return this;
    }
    public withConditions(conditions: Array<CcCondition>): UpdateCcRuleRequestBody {
        this['conditions'] = conditions;
        return this;
    }
    public withAction(action: CreateCcRuleRequestBodyAction): UpdateCcRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withTagType(tagType: UpdateCcRuleRequestBodyTagTypeEnum): UpdateCcRuleRequestBody {
        this['tag_type'] = tagType;
        return this;
    }
    public set tagType(tagType: UpdateCcRuleRequestBodyTagTypeEnum | undefined) {
        this['tag_type'] = tagType;
    }
    public get tagType() {
        return this['tag_type'];
    }
    public withTagIndex(tagIndex: string): UpdateCcRuleRequestBody {
        this['tag_index'] = tagIndex;
        return this;
    }
    public set tagIndex(tagIndex: string | undefined) {
        this['tag_index'] = tagIndex;
    }
    public get tagIndex() {
        return this['tag_index'];
    }
    public withTagCondition(tagCondition: CcrulesListInfoTagCondition): UpdateCcRuleRequestBody {
        this['tag_condition'] = tagCondition;
        return this;
    }
    public set tagCondition(tagCondition: CcrulesListInfoTagCondition | undefined) {
        this['tag_condition'] = tagCondition;
    }
    public get tagCondition() {
        return this['tag_condition'];
    }
    public withLimitNum(limitNum: number): UpdateCcRuleRequestBody {
        this['limit_num'] = limitNum;
        return this;
    }
    public set limitNum(limitNum: number | undefined) {
        this['limit_num'] = limitNum;
    }
    public get limitNum() {
        return this['limit_num'];
    }
    public withLimitPeriod(limitPeriod: number): UpdateCcRuleRequestBody {
        this['limit_period'] = limitPeriod;
        return this;
    }
    public set limitPeriod(limitPeriod: number | undefined) {
        this['limit_period'] = limitPeriod;
    }
    public get limitPeriod() {
        return this['limit_period'];
    }
    public withUnlockNum(unlockNum: number): UpdateCcRuleRequestBody {
        this['unlock_num'] = unlockNum;
        return this;
    }
    public set unlockNum(unlockNum: number | undefined) {
        this['unlock_num'] = unlockNum;
    }
    public get unlockNum() {
        return this['unlock_num'];
    }
    public withLockTime(lockTime: number): UpdateCcRuleRequestBody {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: number | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime() {
        return this['lock_time'];
    }
    public withDomainAggregation(domainAggregation: boolean): UpdateCcRuleRequestBody {
        this['domain_aggregation'] = domainAggregation;
        return this;
    }
    public set domainAggregation(domainAggregation: boolean | undefined) {
        this['domain_aggregation'] = domainAggregation;
    }
    public get domainAggregation() {
        return this['domain_aggregation'];
    }
    public withRegionAggregation(regionAggregation: boolean): UpdateCcRuleRequestBody {
        this['region_aggregation'] = regionAggregation;
        return this;
    }
    public set regionAggregation(regionAggregation: boolean | undefined) {
        this['region_aggregation'] = regionAggregation;
    }
    public get regionAggregation() {
        return this['region_aggregation'];
    }
    public withDescription(description: string): UpdateCcRuleRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateCcRuleRequestBodyTagTypeEnum {
    IP = 'ip',
    COOKIE = 'cookie',
    HEADER = 'header',
    OTHER = 'other',
    POLICY = 'policy',
    DOMAIN = 'domain',
    URL = 'url'
}
