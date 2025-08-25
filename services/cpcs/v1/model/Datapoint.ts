

export class Datapoint {
    public max?: number;
    public min?: number;
    public average?: number;
    public sum?: number;
    public variance?: number;
    public timestamp?: number;
    public unit?: string;
    public constructor() { 
    }
    public withMax(max: number): Datapoint {
        this['max'] = max;
        return this;
    }
    public withMin(min: number): Datapoint {
        this['min'] = min;
        return this;
    }
    public withAverage(average: number): Datapoint {
        this['average'] = average;
        return this;
    }
    public withSum(sum: number): Datapoint {
        this['sum'] = sum;
        return this;
    }
    public withVariance(variance: number): Datapoint {
        this['variance'] = variance;
        return this;
    }
    public withTimestamp(timestamp: number): Datapoint {
        this['timestamp'] = timestamp;
        return this;
    }
    public withUnit(unit: string): Datapoint {
        this['unit'] = unit;
        return this;
    }
}