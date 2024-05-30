import { DimensionLogicTableVO } from './DimensionLogicTableVO';


export class ListDimensionLogicTablesResultDataValue {
    public total?: number;
    public records?: Array<DimensionLogicTableVO>;
    public constructor() { 
    }
    public withTotal(total: number): ListDimensionLogicTablesResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<DimensionLogicTableVO>): ListDimensionLogicTablesResultDataValue {
        this['records'] = records;
        return this;
    }
}