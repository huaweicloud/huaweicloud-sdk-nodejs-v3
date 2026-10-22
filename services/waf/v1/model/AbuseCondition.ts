

export class AbuseCondition {
    public dimension?: AbuseConditionDimensionEnum | string;
    public metric?: AbuseConditionMetricEnum | string;
    public value?: number;
    public constructor() { 
    }
    public withDimension(dimension: AbuseConditionDimensionEnum | string): AbuseCondition {
        this['dimension'] = dimension;
        return this;
    }
    public withMetric(metric: AbuseConditionMetricEnum | string): AbuseCondition {
        this['metric'] = metric;
        return this;
    }
    public withValue(value: number): AbuseCondition {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AbuseConditionDimensionEnum {
    INPUT = 'input',
    OUTPUT = 'output',
    INPUT_OUTPUT = 'input_output'
}
/**
    * @export
    * @enum {string}
    */
export enum AbuseConditionMetricEnum {
    CALL_COUNT = 'call_count',
    CHAR_COUNT = 'char_count'
}
