

export class UpdateBizMetricResultData {
    public value?: object;
    public constructor() { 
    }
    public withValue(value: object): UpdateBizMetricResultData {
        this['value'] = value;
        return this;
    }
}