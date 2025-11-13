import { HitCondition } from './HitCondition';
import { TriggerProcess } from './TriggerProcess';


export class CreateInteractionRuleReq {
    private 'rule_name'?: string;
    private 'event_type'?: number;
    private 'hit_condition'?: HitCondition;
    public trigger?: TriggerProcess;
    public constructor() { 
    }
    public withRuleName(ruleName: string): CreateInteractionRuleReq {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withEventType(eventType: number): CreateInteractionRuleReq {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withHitCondition(hitCondition: HitCondition): CreateInteractionRuleReq {
        this['hit_condition'] = hitCondition;
        return this;
    }
    public set hitCondition(hitCondition: HitCondition  | undefined) {
        this['hit_condition'] = hitCondition;
    }
    public get hitCondition(): HitCondition | undefined {
        return this['hit_condition'];
    }
    public withTrigger(trigger: TriggerProcess): CreateInteractionRuleReq {
        this['trigger'] = trigger;
        return this;
    }
}