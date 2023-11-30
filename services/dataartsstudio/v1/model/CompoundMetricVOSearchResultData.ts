import { CompoundMetricVOSearchResultDataValue } from './CompoundMetricVOSearchResultDataValue';


export class CompoundMetricVOSearchResultData {
    public value?: CompoundMetricVOSearchResultDataValue;
    public constructor() { 
    }
    public withValue(value: CompoundMetricVOSearchResultDataValue): CompoundMetricVOSearchResultData {
        this['value'] = value;
        return this;
    }
}