import { BotMDefenseLevel } from './BotMDefenseLevel';


export class UpdateBotMRuleDefenseStrategyRequestBody {
    public low?: BotMDefenseLevel;
    public medium?: BotMDefenseLevel;
    public high?: BotMDefenseLevel;
    public constructor() { 
    }
    public withLow(low: BotMDefenseLevel): UpdateBotMRuleDefenseStrategyRequestBody {
        this['low'] = low;
        return this;
    }
    public withMedium(medium: BotMDefenseLevel): UpdateBotMRuleDefenseStrategyRequestBody {
        this['medium'] = medium;
        return this;
    }
    public withHigh(high: BotMDefenseLevel): UpdateBotMRuleDefenseStrategyRequestBody {
        this['high'] = high;
        return this;
    }
}