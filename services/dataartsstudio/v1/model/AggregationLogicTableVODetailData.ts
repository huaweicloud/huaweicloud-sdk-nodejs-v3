import { AggregationLogicTableVO } from './AggregationLogicTableVO';


export class AggregationLogicTableVODetailData {
    public value?: AggregationLogicTableVO;
    public constructor() { 
    }
    public withValue(value: AggregationLogicTableVO): AggregationLogicTableVODetailData {
        this['value'] = value;
        return this;
    }
}