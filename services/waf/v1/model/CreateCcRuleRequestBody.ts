import { CcCondition } from './CcCondition';
import { CcrulesListInfoTagCondition } from './CcrulesListInfoTagCondition';
import { CreateCcRuleRequestBodyAction } from './CreateCcRuleRequestBodyAction';


export class CreateCcRuleRequestBody {
    public name?: string;
    public mode?: number;
    public conditions?: Array<CcCondition>;
    public action?: CreateCcRuleRequestBodyAction;
    private 'tag_type'?: CreateCcRuleRequestBodyTagTypeEnum | string;
    private 'tag_index'?: string;
    private 'tag_condition'?: CcrulesListInfoTagCondition;
    private 'limit_num'?: number;
    private 'limit_period'?: number;
    private 'unlock_num'?: number;
    private 'lock_time'?: number;
    private 'domain_aggregation'?: boolean;
    private 'region_aggregation'?: boolean;
    public description?: string;
    public constructor(mode?: number, conditions?: Array<CcCondition>, action?: CreateCcRuleRequestBodyAction, tagType?: string, limitNum?: number, limitPeriod?: number) { 
        this['mode'] = mode;
        this['conditions'] = conditions;
        this['action'] = action;
        this['tag_type'] = tagType;
        this['limit_num'] = limitNum;
        this['limit_period'] = limitPeriod;
    }
    public withName(name: string): CreateCcRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withMode(mode: number): CreateCcRuleRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withConditions(conditions: Array<CcCondition>): CreateCcRuleRequestBody {
        this['conditions'] = conditions;
        return this;
    }
    public withAction(action: CreateCcRuleRequestBodyAction): CreateCcRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withTagType(tagType: CreateCcRuleRequestBodyTagTypeEnum | string): CreateCcRuleRequestBody {
        this['tag_type'] = tagType;
        return this;
    }
    public set tagType(tagType: CreateCcRuleRequestBodyTagTypeEnum | string  | undefined) {
        this['tag_type'] = tagType;
    }
    public get tagType(): CreateCcRuleRequestBodyTagTypeEnum | string | undefined {
        return this['tag_type'];
    }
    public withTagIndex(tagIndex: string): CreateCcRuleRequestBody {
        this['tag_index'] = tagIndex;
        return this;
    }
    public set tagIndex(tagIndex: string  | undefined) {
        this['tag_index'] = tagIndex;
    }
    public get tagIndex(): string | undefined {
        return this['tag_index'];
    }
    public withTagCondition(tagCondition: CcrulesListInfoTagCondition): CreateCcRuleRequestBody {
        this['tag_condition'] = tagCondition;
        return this;
    }
    public set tagCondition(tagCondition: CcrulesListInfoTagCondition  | undefined) {
        this['tag_condition'] = tagCondition;
    }
    public get tagCondition(): CcrulesListInfoTagCondition | undefined {
        return this['tag_condition'];
    }
    public withLimitNum(limitNum: number): CreateCcRuleRequestBody {
        this['limit_num'] = limitNum;
        return this;
    }
    public set limitNum(limitNum: number  | undefined) {
        this['limit_num'] = limitNum;
    }
    public get limitNum(): number | undefined {
        return this['limit_num'];
    }
    public withLimitPeriod(limitPeriod: number): CreateCcRuleRequestBody {
        this['limit_period'] = limitPeriod;
        return this;
    }
    public set limitPeriod(limitPeriod: number  | undefined) {
        this['limit_period'] = limitPeriod;
    }
    public get limitPeriod(): number | undefined {
        return this['limit_period'];
    }
    public withUnlockNum(unlockNum: number): CreateCcRuleRequestBody {
        this['unlock_num'] = unlockNum;
        return this;
    }
    public set unlockNum(unlockNum: number  | undefined) {
        this['unlock_num'] = unlockNum;
    }
    public get unlockNum(): number | undefined {
        return this['unlock_num'];
    }
    public withLockTime(lockTime: number): CreateCcRuleRequestBody {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: number  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): number | undefined {
        return this['lock_time'];
    }
    public withDomainAggregation(domainAggregation: boolean): CreateCcRuleRequestBody {
        this['domain_aggregation'] = domainAggregation;
        return this;
    }
    public set domainAggregation(domainAggregation: boolean  | undefined) {
        this['domain_aggregation'] = domainAggregation;
    }
    public get domainAggregation(): boolean | undefined {
        return this['domain_aggregation'];
    }
    public withRegionAggregation(regionAggregation: boolean): CreateCcRuleRequestBody {
        this['region_aggregation'] = regionAggregation;
        return this;
    }
    public set regionAggregation(regionAggregation: boolean  | undefined) {
        this['region_aggregation'] = regionAggregation;
    }
    public get regionAggregation(): boolean | undefined {
        return this['region_aggregation'];
    }
    public withDescription(description: string): CreateCcRuleRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateCcRuleRequestBodyTagTypeEnum {
    IP = 'ip',
    COOKIE = 'cookie',
    HEADER = 'header',
    OTHER = 'other',
    POLICY = 'policy',
    DOMAIN = 'domain',
    URL = 'url'
}
