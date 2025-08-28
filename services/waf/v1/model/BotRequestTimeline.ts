

export class BotRequestTimeline {
    public datetime?: number;
    private 'normal_request_count'?: number;
    private 'known_bot_matched_count'?: number;
    private 'transparent_matched_count'?: number;
    private 'behavior_matched_count'?: number;
    public constructor() { 
    }
    public withDatetime(datetime: number): BotRequestTimeline {
        this['datetime'] = datetime;
        return this;
    }
    public withNormalRequestCount(normalRequestCount: number): BotRequestTimeline {
        this['normal_request_count'] = normalRequestCount;
        return this;
    }
    public set normalRequestCount(normalRequestCount: number  | undefined) {
        this['normal_request_count'] = normalRequestCount;
    }
    public get normalRequestCount(): number | undefined {
        return this['normal_request_count'];
    }
    public withKnownBotMatchedCount(knownBotMatchedCount: number): BotRequestTimeline {
        this['known_bot_matched_count'] = knownBotMatchedCount;
        return this;
    }
    public set knownBotMatchedCount(knownBotMatchedCount: number  | undefined) {
        this['known_bot_matched_count'] = knownBotMatchedCount;
    }
    public get knownBotMatchedCount(): number | undefined {
        return this['known_bot_matched_count'];
    }
    public withTransparentMatchedCount(transparentMatchedCount: number): BotRequestTimeline {
        this['transparent_matched_count'] = transparentMatchedCount;
        return this;
    }
    public set transparentMatchedCount(transparentMatchedCount: number  | undefined) {
        this['transparent_matched_count'] = transparentMatchedCount;
    }
    public get transparentMatchedCount(): number | undefined {
        return this['transparent_matched_count'];
    }
    public withBehaviorMatchedCount(behaviorMatchedCount: number): BotRequestTimeline {
        this['behavior_matched_count'] = behaviorMatchedCount;
        return this;
    }
    public set behaviorMatchedCount(behaviorMatchedCount: number  | undefined) {
        this['behavior_matched_count'] = behaviorMatchedCount;
    }
    public get behaviorMatchedCount(): number | undefined {
        return this['behavior_matched_count'];
    }
}