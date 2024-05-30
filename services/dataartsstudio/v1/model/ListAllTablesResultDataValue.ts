import { AllTableVO } from './AllTableVO';


export class ListAllTablesResultDataValue {
    public total?: number;
    public records?: Array<AllTableVO>;
    public constructor() { 
    }
    public withTotal(total: number): ListAllTablesResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<AllTableVO>): ListAllTablesResultDataValue {
        this['records'] = records;
        return this;
    }
}