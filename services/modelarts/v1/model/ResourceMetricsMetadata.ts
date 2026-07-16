

export class ResourceMetricsMetadata {
    public name?: string;
    public labels?: object;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ResourceMetricsMetadata {
        this['name'] = name;
        return this;
    }
    public withLabels(labels: object): ResourceMetricsMetadata {
        this['labels'] = labels;
        return this;
    }
}