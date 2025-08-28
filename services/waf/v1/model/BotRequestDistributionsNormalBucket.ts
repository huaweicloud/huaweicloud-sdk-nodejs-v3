

export class BotRequestDistributionsNormalBucket {
    public count?: number;
    public constructor() { 
    }
    public withCount(count: number): BotRequestDistributionsNormalBucket {
        this['count'] = count;
        return this;
    }
}