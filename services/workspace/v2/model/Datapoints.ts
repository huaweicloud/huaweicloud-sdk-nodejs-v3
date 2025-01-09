

export class Datapoints {
    public average?: number;
    public timestamp?: number;
    public constructor() { 
    }
    public withAverage(average: number): Datapoints {
        this['average'] = average;
        return this;
    }
    public withTimestamp(timestamp: number): Datapoints {
        this['timestamp'] = timestamp;
        return this;
    }
}