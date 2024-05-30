import { RelationVO } from './RelationVO';


export class ListRelationsResultDataValue {
    public total?: number;
    public records?: Array<RelationVO>;
    public constructor() { 
    }
    public withTotal(total: number): ListRelationsResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<RelationVO>): ListRelationsResultDataValue {
        this['records'] = records;
        return this;
    }
}