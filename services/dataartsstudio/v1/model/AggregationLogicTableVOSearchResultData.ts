import { AggregationLogicTableVOSearchResultDataValue } from './AggregationLogicTableVOSearchResultDataValue';


export class AggregationLogicTableVOSearchResultData {
    public value?: AggregationLogicTableVOSearchResultDataValue;
    public constructor() { 
    }
    public withValue(value: AggregationLogicTableVOSearchResultDataValue): AggregationLogicTableVOSearchResultData {
        this['value'] = value;
        return this;
    }
}