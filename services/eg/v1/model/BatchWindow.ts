

export class BatchWindow {
    public count?: number;
    public time?: number;
    public interval?: number;
    public constructor() { 
    }
    public withCount(count: number): BatchWindow {
        this['count'] = count;
        return this;
    }
    public withTime(time: number): BatchWindow {
        this['time'] = time;
        return this;
    }
    public withInterval(interval: number): BatchWindow {
        this['interval'] = interval;
        return this;
    }
}