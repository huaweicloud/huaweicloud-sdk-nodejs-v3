import { FactLogicTableVO } from './FactLogicTableVO';


export class ListFactLogicTablesResultDataValue {
    public total?: number;
    public records?: Array<FactLogicTableVO>;
    public constructor() { 
    }
    public withTotal(total: number): ListFactLogicTablesResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<FactLogicTableVO>): ListFactLogicTablesResultDataValue {
        this['records'] = records;
        return this;
    }
}