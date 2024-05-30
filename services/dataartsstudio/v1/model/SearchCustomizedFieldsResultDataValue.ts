import { CustomizedFieldsVO } from './CustomizedFieldsVO';


export class SearchCustomizedFieldsResultDataValue {
    public total?: number;
    public records?: Array<CustomizedFieldsVO>;
    public constructor() { 
    }
    public withTotal(total: number): SearchCustomizedFieldsResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<CustomizedFieldsVO>): SearchCustomizedFieldsResultDataValue {
        this['records'] = records;
        return this;
    }
}