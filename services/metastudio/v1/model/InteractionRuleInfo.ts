import { HitCondition } from './HitCondition';
import { ReviewConfig } from './ReviewConfig';
import { TriggerProcess } from './TriggerProcess';


export class InteractionRuleInfo {
    private 'rule_index'?: string;
    private 'rule_name'?: string;
    public enabled?: boolean;
    private 'event_type'?: number;
    private 'hit_condition'?: HitCondition;
    public trigger?: TriggerProcess;
    private 'review_config'?: ReviewConfig;
    public constructor() { 
    }
    public withRuleIndex(ruleIndex: string): InteractionRuleInfo {
        this['rule_index'] = ruleIndex;
        return this;
    }
    public set ruleIndex(ruleIndex: string  | undefined) {
        this['rule_index'] = ruleIndex;
    }
    public get ruleIndex(): string | undefined {
        return this['rule_index'];
    }
    public withRuleName(ruleName: string): InteractionRuleInfo {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withEnabled(enabled: boolean): InteractionRuleInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withEventType(eventType: number): InteractionRuleInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withHitCondition(hitCondition: HitCondition): InteractionRuleInfo {
        this['hit_condition'] = hitCondition;
        return this;
    }
    public set hitCondition(hitCondition: HitCondition  | undefined) {
        this['hit_condition'] = hitCondition;
    }
    public get hitCondition(): HitCondition | undefined {
        return this['hit_condition'];
    }
    public withTrigger(trigger: TriggerProcess): InteractionRuleInfo {
        this['trigger'] = trigger;
        return this;
    }
    public withReviewConfig(reviewConfig: ReviewConfig): InteractionRuleInfo {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
}