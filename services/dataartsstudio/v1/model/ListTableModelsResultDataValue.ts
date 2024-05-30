import { TableModelVO } from './TableModelVO';


export class ListTableModelsResultDataValue {
    public total?: number;
    public records?: Array<TableModelVO>;
    public constructor() { 
    }
    public withTotal(total: number): ListTableModelsResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<TableModelVO>): ListTableModelsResultDataValue {
        this['records'] = records;
        return this;
    }
}