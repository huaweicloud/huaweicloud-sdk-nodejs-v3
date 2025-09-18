import { BotMDefenseLevel } from './BotMDefenseLevel';


export class BotMDefenseStrategy {
    public low?: BotMDefenseLevel;
    public medium?: BotMDefenseLevel;
    public high?: BotMDefenseLevel;
    public constructor() { 
    }
    public withLow(low: BotMDefenseLevel): BotMDefenseStrategy {
        this['low'] = low;
        return this;
    }
    public withMedium(medium: BotMDefenseLevel): BotMDefenseStrategy {
        this['medium'] = medium;
        return this;
    }
    public withHigh(high: BotMDefenseLevel): BotMDefenseStrategy {
        this['high'] = high;
        return this;
    }
}