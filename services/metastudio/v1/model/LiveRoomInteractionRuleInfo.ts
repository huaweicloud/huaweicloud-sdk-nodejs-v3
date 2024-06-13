import { HitCondition } from './HitCondition';
import { InteractionRuleInfo } from './InteractionRuleInfo';
import { ReviewConfig } from './ReviewConfig';
import { TriggerProcess } from './TriggerProcess';


export class LiveRoomInteractionRuleInfo {
    private 'rule_index'?: string;
    private 'rule_name'?: string;
    public enabled?: boolean;
    private 'event_type'?: number;
    private 'hit_condition'?: HitCondition;
    public trigger?: TriggerProcess;
    private 'review_config'?: ReviewConfig;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'enabled_scenes'?: Array<string>;
    public constructor() { 
    }
    public withRuleIndex(ruleIndex: string): LiveRoomInteractionRuleInfo {
        this['rule_index'] = ruleIndex;
        return this;
    }
    public set ruleIndex(ruleIndex: string  | undefined) {
        this['rule_index'] = ruleIndex;
    }
    public get ruleIndex(): string | undefined {
        return this['rule_index'];
    }
    public withRuleName(ruleName: string): LiveRoomInteractionRuleInfo {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withEnabled(enabled: boolean): LiveRoomInteractionRuleInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withEventType(eventType: number): LiveRoomInteractionRuleInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withHitCondition(hitCondition: HitCondition): LiveRoomInteractionRuleInfo {
        this['hit_condition'] = hitCondition;
        return this;
    }
    public set hitCondition(hitCondition: HitCondition  | undefined) {
        this['hit_condition'] = hitCondition;
    }
    public get hitCondition(): HitCondition | undefined {
        return this['hit_condition'];
    }
    public withTrigger(trigger: TriggerProcess): LiveRoomInteractionRuleInfo {
        this['trigger'] = trigger;
        return this;
    }
    public withReviewConfig(reviewConfig: ReviewConfig): LiveRoomInteractionRuleInfo {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
    public withGroupId(groupId: string): LiveRoomInteractionRuleInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): LiveRoomInteractionRuleInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withEnabledScenes(enabledScenes: Array<string>): LiveRoomInteractionRuleInfo {
        this['enabled_scenes'] = enabledScenes;
        return this;
    }
    public set enabledScenes(enabledScenes: Array<string>  | undefined) {
        this['enabled_scenes'] = enabledScenes;
    }
    public get enabledScenes(): Array<string> | undefined {
        return this['enabled_scenes'];
    }
}