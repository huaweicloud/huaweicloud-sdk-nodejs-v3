

export class ServerDataPoints {
    public average?: number;
    public max?: number;
    public min?: number;
    public sum?: number;
    public variance?: number;
    public timestamp?: number;
    public unit?: string;
    public constructor() { 
    }
    public withAverage(average: number): ServerDataPoints {
        this['average'] = average;
        return this;
    }
    public withMax(max: number): ServerDataPoints {
        this['max'] = max;
        return this;
    }
    public withMin(min: number): ServerDataPoints {
        this['min'] = min;
        return this;
    }
    public withSum(sum: number): ServerDataPoints {
        this['sum'] = sum;
        return this;
    }
    public withVariance(variance: number): ServerDataPoints {
        this['variance'] = variance;
        return this;
    }
    public withTimestamp(timestamp: number): ServerDataPoints {
        this['timestamp'] = timestamp;
        return this;
    }
    public withUnit(unit: string): ServerDataPoints {
        this['unit'] = unit;
        return this;
    }
}