

export class DimensionNames {
    public metric?: Array<string>;
    public event?: Array<string>;
    public constructor(metric?: Array<string>, event?: Array<string>) { 
        this['metric'] = metric;
        this['event'] = event;
    }
    public withMetric(metric: Array<string>): DimensionNames {
        this['metric'] = metric;
        return this;
    }
    public withEvent(event: Array<string>): DimensionNames {
        this['event'] = event;
        return this;
    }
}