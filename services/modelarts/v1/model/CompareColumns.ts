

export class CompareColumns {
    public parameters?: Array<string>;
    public metrics?: Array<string>;
    public constructor() { 
    }
    public withParameters(parameters: Array<string>): CompareColumns {
        this['parameters'] = parameters;
        return this;
    }
    public withMetrics(metrics: Array<string>): CompareColumns {
        this['metrics'] = metrics;
        return this;
    }
}