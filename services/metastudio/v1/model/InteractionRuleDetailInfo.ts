import { HitCondition } from './HitCondition';
import { InteractionRuleInfo } from './InteractionRuleInfo';
import { ReviewConfig } from './ReviewConfig';
import { TriggerProcess } from './TriggerProcess';


export class InteractionRuleDetailInfo {
    private 'rule_index'?: string;
    private 'rule_name'?: string;
    public enabled?: boolean;
    private 'event_type'?: number;
    private 'hit_condition'?: HitCondition;
    public trigger?: TriggerProcess;
    private 'review_config'?: ReviewConfig;
    private 'rule_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withRuleIndex(ruleIndex: string): InteractionRuleDetailInfo {
        this['rule_index'] = ruleIndex;
        return this;
    }
    public set ruleIndex(ruleIndex: string  | undefined) {
        this['rule_index'] = ruleIndex;
    }
    public get ruleIndex(): string | undefined {
        return this['rule_index'];
    }
    public withRuleName(ruleName: string): InteractionRuleDetailInfo {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withEnabled(enabled: boolean): InteractionRuleDetailInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withEventType(eventType: number): InteractionRuleDetailInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withHitCondition(hitCondition: HitCondition): InteractionRuleDetailInfo {
        this['hit_condition'] = hitCondition;
        return this;
    }
    public set hitCondition(hitCondition: HitCondition  | undefined) {
        this['hit_condition'] = hitCondition;
    }
    public get hitCondition(): HitCondition | undefined {
        return this['hit_condition'];
    }
    public withTrigger(trigger: TriggerProcess): InteractionRuleDetailInfo {
        this['trigger'] = trigger;
        return this;
    }
    public withReviewConfig(reviewConfig: ReviewConfig): InteractionRuleDetailInfo {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
    public withRuleId(ruleId: string): InteractionRuleDetailInfo {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withCreateTime(createTime: string): InteractionRuleDetailInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): InteractionRuleDetailInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}