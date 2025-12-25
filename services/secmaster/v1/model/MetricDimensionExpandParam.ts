

export class MetricDimensionExpandParam {
    public labels?: Array<string>;
    public functions?: Array<string>;
    public constructor(labels?: Array<string>, functions?: Array<string>) { 
        this['labels'] = labels;
        this['functions'] = functions;
    }
    public withLabels(labels: Array<string>): MetricDimensionExpandParam {
        this['labels'] = labels;
        return this;
    }
    public withFunctions(functions: Array<string>): MetricDimensionExpandParam {
        this['functions'] = functions;
        return this;
    }
}