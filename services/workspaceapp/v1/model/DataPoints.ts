

export class DataPoints {
    public average?: number;
    public timestamp?: number;
    public constructor() { 
    }
    public withAverage(average: number): DataPoints {
        this['average'] = average;
        return this;
    }
    public withTimestamp(timestamp: number): DataPoints {
        this['timestamp'] = timestamp;
        return this;
    }
}