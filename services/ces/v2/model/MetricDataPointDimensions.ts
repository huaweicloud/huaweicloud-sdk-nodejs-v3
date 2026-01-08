

export class MetricDataPointDimensions {
    public name?: string;
    public value?: string;
    private 'origin_value'?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): MetricDataPointDimensions {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): MetricDataPointDimensions {
        this['value'] = value;
        return this;
    }
    public withOriginValue(originValue: string): MetricDataPointDimensions {
        this['origin_value'] = originValue;
        return this;
    }
    public set originValue(originValue: string  | undefined) {
        this['origin_value'] = originValue;
    }
    public get originValue(): string | undefined {
        return this['origin_value'];
    }
}