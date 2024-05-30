import { ListTableModelRelationsResultDataValueRecords } from './ListTableModelRelationsResultDataValueRecords';


export class ListTableModelRelationsResultDataValue {
    public total?: number;
    public records?: Array<ListTableModelRelationsResultDataValueRecords>;
    public constructor() { 
    }
    public withTotal(total: number): ListTableModelRelationsResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<ListTableModelRelationsResultDataValueRecords>): ListTableModelRelationsResultDataValue {
        this['records'] = records;
        return this;
    }
}