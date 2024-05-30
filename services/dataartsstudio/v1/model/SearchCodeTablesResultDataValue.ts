import { CodeTableVO } from './CodeTableVO';


export class SearchCodeTablesResultDataValue {
    public total?: number;
    public records?: Array<CodeTableVO>;
    public constructor() { 
    }
    public withTotal(total: number): SearchCodeTablesResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<CodeTableVO>): SearchCodeTablesResultDataValue {
        this['records'] = records;
        return this;
    }
}