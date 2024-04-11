import { AggregationLogicTableVO } from './AggregationLogicTableVO';


export class AggregationLogicTableVOSearchResultDataValue {
    public records?: Array<AggregationLogicTableVO>;
    public total?: number;
    public constructor() { 
    }
    public withRecords(records: Array<AggregationLogicTableVO>): AggregationLogicTableVOSearchResultDataValue {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): AggregationLogicTableVOSearchResultDataValue {
        this['total'] = total;
        return this;
    }
}