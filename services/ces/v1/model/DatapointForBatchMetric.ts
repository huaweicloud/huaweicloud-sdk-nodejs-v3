

export class DatapointForBatchMetric {
    public max?: number;
    public min?: number;
    public average?: number;
    public sum?: number;
    public variance?: number;
    public timestamp?: number;
    public constructor(timestamp?: number) { 
        this['timestamp'] = timestamp;
    }
    public withMax(max: number): DatapointForBatchMetric {
        this['max'] = max;
        return this;
    }
    public withMin(min: number): DatapointForBatchMetric {
        this['min'] = min;
        return this;
    }
    public withAverage(average: number): DatapointForBatchMetric {
        this['average'] = average;
        return this;
    }
    public withSum(sum: number): DatapointForBatchMetric {
        this['sum'] = sum;
        return this;
    }
    public withVariance(variance: number): DatapointForBatchMetric {
        this['variance'] = variance;
        return this;
    }
    public withTimestamp(timestamp: number): DatapointForBatchMetric {
        this['timestamp'] = timestamp;
        return this;
    }
}