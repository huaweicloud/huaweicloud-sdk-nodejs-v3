import { BotMDefenseStrategy } from './BotMDefenseStrategy';
import { BotMRule } from './BotMRule';


export class BotMBehaviorDetectionRule {
    public rule?: BotMRule;
    public strategy?: BotMDefenseStrategy;
    public constructor() { 
    }
    public withRule(rule: BotMRule): BotMBehaviorDetectionRule {
        this['rule'] = rule;
        return this;
    }
    public withStrategy(strategy: BotMDefenseStrategy): BotMBehaviorDetectionRule {
        this['strategy'] = strategy;
        return this;
    }
}