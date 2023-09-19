import { HitCondition } from './HitCondition';
import { TriggerProcess } from './TriggerProcess';


export class InteractionRuleInfo {
    private 'rule_name'?: string;
    public enabled?: boolean;
    private 'event_type'?: number;
    private 'hit_condition'?: HitCondition;
    public trigger?: TriggerProcess;
    public constructor() { 
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
}