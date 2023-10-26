

export class ValueData {
    private 'metric_name'?: string;
    public type?: ValueDataTypeEnum | string;
    public unit?: string;
    public value?: number;
    public constructor(metricName?: string, value?: number) { 
        this['metric_name'] = metricName;
        this['value'] = value;
    }
    public withMetricName(metricName: string): ValueData {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withType(type: ValueDataTypeEnum | string): ValueData {
        this['type'] = type;
        return this;
    }
    public withUnit(unit: string): ValueData {
        this['unit'] = unit;
        return this;
    }
    public withValue(value: number): ValueData {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ValueDataTypeEnum {
    INT = 'int',
    FLOAT = 'float'
}
