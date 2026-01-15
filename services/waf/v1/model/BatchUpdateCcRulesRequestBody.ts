import { CcCondition } from './CcCondition';
import { CcrulesListInfoTagCondition } from './CcrulesListInfoTagCondition';
import { CreateCcRuleRequestBodyAction } from './CreateCcRuleRequestBodyAction';
import { PolicyRuleIdRequestBodyPolicyRuleIds } from './PolicyRuleIdRequestBodyPolicyRuleIds';


export class BatchUpdateCcRulesRequestBody {
    public name?: string;
    public mode?: number;
    public url?: string;
    public conditions?: Array<CcCondition>;
    public action?: CreateCcRuleRequestBodyAction;
    private 'tag_type'?: BatchUpdateCcRulesRequestBodyTagTypeEnum | string;
    private 'tag_index'?: string;
    private 'tag_condition'?: CcrulesListInfoTagCondition;
    private 'limit_num'?: number;
    private 'limit_period'?: number;
    private 'unlock_num'?: number;
    private 'lock_time'?: number;
    private 'domain_aggregation'?: boolean;
    private 'region_aggregation'?: boolean;
    public description?: string;
    private 'policy_rule_ids'?: Array<PolicyRuleIdRequestBodyPolicyRuleIds>;
    public constructor(mode?: number, conditions?: Array<CcCondition>, action?: CreateCcRuleRequestBodyAction, tagType?: string, limitNum?: number, limitPeriod?: number, policyRuleIds?: Array<PolicyRuleIdRequestBodyPolicyRuleIds>) { 
        this['mode'] = mode;
        this['conditions'] = conditions;
        this['action'] = action;
        this['tag_type'] = tagType;
        this['limit_num'] = limitNum;
        this['limit_period'] = limitPeriod;
        this['policy_rule_ids'] = policyRuleIds;
    }
    public withName(name: string): BatchUpdateCcRulesRequestBody {
        this['name'] = name;
        return this;
    }
    public withMode(mode: number): BatchUpdateCcRulesRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withUrl(url: string): BatchUpdateCcRulesRequestBody {
        this['url'] = url;
        return this;
    }
    public withConditions(conditions: Array<CcCondition>): BatchUpdateCcRulesRequestBody {
        this['conditions'] = conditions;
        return this;
    }
    public withAction(action: CreateCcRuleRequestBodyAction): BatchUpdateCcRulesRequestBody {
        this['action'] = action;
        return this;
    }
    public withTagType(tagType: BatchUpdateCcRulesRequestBodyTagTypeEnum | string): BatchUpdateCcRulesRequestBody {
        this['tag_type'] = tagType;
        return this;
    }
    public set tagType(tagType: BatchUpdateCcRulesRequestBodyTagTypeEnum | string  | undefined) {
        this['tag_type'] = tagType;
    }
    public get tagType(): BatchUpdateCcRulesRequestBodyTagTypeEnum | string | undefined {
        return this['tag_type'];
    }
    public withTagIndex(tagIndex: string): BatchUpdateCcRulesRequestBody {
        this['tag_index'] = tagIndex;
        return this;
    }
    public set tagIndex(tagIndex: string  | undefined) {
        this['tag_index'] = tagIndex;
    }
    public get tagIndex(): string | undefined {
        return this['tag_index'];
    }
    public withTagCondition(tagCondition: CcrulesListInfoTagCondition): BatchUpdateCcRulesRequestBody {
        this['tag_condition'] = tagCondition;
        return this;
    }
    public set tagCondition(tagCondition: CcrulesListInfoTagCondition  | undefined) {
        this['tag_condition'] = tagCondition;
    }
    public get tagCondition(): CcrulesListInfoTagCondition | undefined {
        return this['tag_condition'];
    }
    public withLimitNum(limitNum: number): BatchUpdateCcRulesRequestBody {
        this['limit_num'] = limitNum;
        return this;
    }
    public set limitNum(limitNum: number  | undefined) {
        this['limit_num'] = limitNum;
    }
    public get limitNum(): number | undefined {
        return this['limit_num'];
    }
    public withLimitPeriod(limitPeriod: number): BatchUpdateCcRulesRequestBody {
        this['limit_period'] = limitPeriod;
        return this;
    }
    public set limitPeriod(limitPeriod: number  | undefined) {
        this['limit_period'] = limitPeriod;
    }
    public get limitPeriod(): number | undefined {
        return this['limit_period'];
    }
    public withUnlockNum(unlockNum: number): BatchUpdateCcRulesRequestBody {
        this['unlock_num'] = unlockNum;
        return this;
    }
    public set unlockNum(unlockNum: number  | undefined) {
        this['unlock_num'] = unlockNum;
    }
    public get unlockNum(): number | undefined {
        return this['unlock_num'];
    }
    public withLockTime(lockTime: number): BatchUpdateCcRulesRequestBody {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: number  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): number | undefined {
        return this['lock_time'];
    }
    public withDomainAggregation(domainAggregation: boolean): BatchUpdateCcRulesRequestBody {
        this['domain_aggregation'] = domainAggregation;
        return this;
    }
    public set domainAggregation(domainAggregation: boolean  | undefined) {
        this['domain_aggregation'] = domainAggregation;
    }
    public get domainAggregation(): boolean | undefined {
        return this['domain_aggregation'];
    }
    public withRegionAggregation(regionAggregation: boolean): BatchUpdateCcRulesRequestBody {
        this['region_aggregation'] = regionAggregation;
        return this;
    }
    public set regionAggregation(regionAggregation: boolean  | undefined) {
        this['region_aggregation'] = regionAggregation;
    }
    public get regionAggregation(): boolean | undefined {
        return this['region_aggregation'];
    }
    public withDescription(description: string): BatchUpdateCcRulesRequestBody {
        this['description'] = description;
        return this;
    }
    public withPolicyRuleIds(policyRuleIds: Array<PolicyRuleIdRequestBodyPolicyRuleIds>): BatchUpdateCcRulesRequestBody {
        this['policy_rule_ids'] = policyRuleIds;
        return this;
    }
    public set policyRuleIds(policyRuleIds: Array<PolicyRuleIdRequestBodyPolicyRuleIds>  | undefined) {
        this['policy_rule_ids'] = policyRuleIds;
    }
    public get policyRuleIds(): Array<PolicyRuleIdRequestBodyPolicyRuleIds> | undefined {
        return this['policy_rule_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdateCcRulesRequestBodyTagTypeEnum {
    IP = 'ip',
    COOKIE = 'cookie',
    HEADER = 'header',
    OTHER = 'other',
    POLICY = 'policy',
    DOMAIN = 'domain',
    URL = 'url'
}
