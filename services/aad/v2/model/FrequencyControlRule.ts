import { ActionInfo } from './ActionInfo';
import { Condition } from './Condition';
import { TagCondition } from './TagCondition';


export class FrequencyControlRule {
    public id?: string;
    public producer?: number;
    public name?: string;
    public url?: string;
    private 'limit_num'?: string;
    private 'limit_period'?: string;
    private 'lock_time'?: string;
    private 'tag_type'?: string;
    private 'tag_index'?: string;
    private 'tag_condition'?: TagCondition;
    public action?: ActionInfo;
    public mode?: string;
    public conditions?: Array<Condition>;
    private 'unlock_num'?: number;
    private 'domain_aggregation'?: boolean;
    private 'region_aggregation'?: boolean;
    private 'captcha_lock_time'?: number;
    private 'grayscale_time'?: boolean;
    public constructor() { 
    }
    public withId(id: string): FrequencyControlRule {
        this['id'] = id;
        return this;
    }
    public withProducer(producer: number): FrequencyControlRule {
        this['producer'] = producer;
        return this;
    }
    public withName(name: string): FrequencyControlRule {
        this['name'] = name;
        return this;
    }
    public withUrl(url: string): FrequencyControlRule {
        this['url'] = url;
        return this;
    }
    public withLimitNum(limitNum: string): FrequencyControlRule {
        this['limit_num'] = limitNum;
        return this;
    }
    public set limitNum(limitNum: string  | undefined) {
        this['limit_num'] = limitNum;
    }
    public get limitNum(): string | undefined {
        return this['limit_num'];
    }
    public withLimitPeriod(limitPeriod: string): FrequencyControlRule {
        this['limit_period'] = limitPeriod;
        return this;
    }
    public set limitPeriod(limitPeriod: string  | undefined) {
        this['limit_period'] = limitPeriod;
    }
    public get limitPeriod(): string | undefined {
        return this['limit_period'];
    }
    public withLockTime(lockTime: string): FrequencyControlRule {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: string  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): string | undefined {
        return this['lock_time'];
    }
    public withTagType(tagType: string): FrequencyControlRule {
        this['tag_type'] = tagType;
        return this;
    }
    public set tagType(tagType: string  | undefined) {
        this['tag_type'] = tagType;
    }
    public get tagType(): string | undefined {
        return this['tag_type'];
    }
    public withTagIndex(tagIndex: string): FrequencyControlRule {
        this['tag_index'] = tagIndex;
        return this;
    }
    public set tagIndex(tagIndex: string  | undefined) {
        this['tag_index'] = tagIndex;
    }
    public get tagIndex(): string | undefined {
        return this['tag_index'];
    }
    public withTagCondition(tagCondition: TagCondition): FrequencyControlRule {
        this['tag_condition'] = tagCondition;
        return this;
    }
    public set tagCondition(tagCondition: TagCondition  | undefined) {
        this['tag_condition'] = tagCondition;
    }
    public get tagCondition(): TagCondition | undefined {
        return this['tag_condition'];
    }
    public withAction(action: ActionInfo): FrequencyControlRule {
        this['action'] = action;
        return this;
    }
    public withMode(mode: string): FrequencyControlRule {
        this['mode'] = mode;
        return this;
    }
    public withConditions(conditions: Array<Condition>): FrequencyControlRule {
        this['conditions'] = conditions;
        return this;
    }
    public withUnlockNum(unlockNum: number): FrequencyControlRule {
        this['unlock_num'] = unlockNum;
        return this;
    }
    public set unlockNum(unlockNum: number  | undefined) {
        this['unlock_num'] = unlockNum;
    }
    public get unlockNum(): number | undefined {
        return this['unlock_num'];
    }
    public withDomainAggregation(domainAggregation: boolean): FrequencyControlRule {
        this['domain_aggregation'] = domainAggregation;
        return this;
    }
    public set domainAggregation(domainAggregation: boolean  | undefined) {
        this['domain_aggregation'] = domainAggregation;
    }
    public get domainAggregation(): boolean | undefined {
        return this['domain_aggregation'];
    }
    public withRegionAggregation(regionAggregation: boolean): FrequencyControlRule {
        this['region_aggregation'] = regionAggregation;
        return this;
    }
    public set regionAggregation(regionAggregation: boolean  | undefined) {
        this['region_aggregation'] = regionAggregation;
    }
    public get regionAggregation(): boolean | undefined {
        return this['region_aggregation'];
    }
    public withCaptchaLockTime(captchaLockTime: number): FrequencyControlRule {
        this['captcha_lock_time'] = captchaLockTime;
        return this;
    }
    public set captchaLockTime(captchaLockTime: number  | undefined) {
        this['captcha_lock_time'] = captchaLockTime;
    }
    public get captchaLockTime(): number | undefined {
        return this['captcha_lock_time'];
    }
    public withGrayscaleTime(grayscaleTime: boolean): FrequencyControlRule {
        this['grayscale_time'] = grayscaleTime;
        return this;
    }
    public set grayscaleTime(grayscaleTime: boolean  | undefined) {
        this['grayscale_time'] = grayscaleTime;
    }
    public get grayscaleTime(): boolean | undefined {
        return this['grayscale_time'];
    }
}