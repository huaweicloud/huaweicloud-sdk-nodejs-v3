import { BotMDefenseStrategy } from './BotMDefenseStrategy';
import { BotMRule } from './BotMRule';


export class BotMBehaviorDetectionRule {
    public rule?: BotMRule;
    private 'defense_strategy'?: BotMDefenseStrategy;
    public constructor() { 
    }
    public withRule(rule: BotMRule): BotMBehaviorDetectionRule {
        this['rule'] = rule;
        return this;
    }
    public withDefenseStrategy(defenseStrategy: BotMDefenseStrategy): BotMBehaviorDetectionRule {
        this['defense_strategy'] = defenseStrategy;
        return this;
    }
    public set defenseStrategy(defenseStrategy: BotMDefenseStrategy  | undefined) {
        this['defense_strategy'] = defenseStrategy;
    }
    public get defenseStrategy(): BotMDefenseStrategy | undefined {
        return this['defense_strategy'];
    }
}