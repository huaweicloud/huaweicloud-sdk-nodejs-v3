

export class DiscardInfo {
    public type?: string;
    public count?: number;
    public totalTime?: number;
    public constructor() { 
    }
    public withType(type: string): DiscardInfo {
        this['type'] = type;
        return this;
    }
    public withCount(count: number): DiscardInfo {
        this['count'] = count;
        return this;
    }
    public withTotalTime(totalTime: number): DiscardInfo {
        this['totalTime'] = totalTime;
        return this;
    }
}