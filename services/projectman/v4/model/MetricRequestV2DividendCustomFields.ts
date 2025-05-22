

export class MetricRequestV2DividendCustomFields {
    public name?: string;
    public options?: string;
    public constructor() { 
    }
    public withName(name: string): MetricRequestV2DividendCustomFields {
        this['name'] = name;
        return this;
    }
    public withOptions(options: string): MetricRequestV2DividendCustomFields {
        this['options'] = options;
        return this;
    }
}