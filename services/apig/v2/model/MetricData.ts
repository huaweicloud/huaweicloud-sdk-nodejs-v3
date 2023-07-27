

export class MetricData {
    public average?: number;
    public max?: number;
    public min?: number;
    public sum?: number;
    public variance?: number;
    public timestamp?: number;
    public unit?: string;
    public constructor() { 
    }
    public withAverage(average: number): MetricData {
        this['average'] = average;
        return this;
    }
    public withMax(max: number): MetricData {
        this['max'] = max;
        return this;
    }
    public withMin(min: number): MetricData {
        this['min'] = min;
        return this;
    }
    public withSum(sum: number): MetricData {
        this['sum'] = sum;
        return this;
    }
    public withVariance(variance: number): MetricData {
        this['variance'] = variance;
        return this;
    }
    public withTimestamp(timestamp: number): MetricData {
        this['timestamp'] = timestamp;
        return this;
    }
    public withUnit(unit: string): MetricData {
        this['unit'] = unit;
        return this;
    }
}