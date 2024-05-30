

export class ListBizMetricDimensionsResultData {
    public value?: Array<string>;
    public constructor() { 
    }
    public withValue(value: Array<string>): ListBizMetricDimensionsResultData {
        this['value'] = value;
        return this;
    }
}