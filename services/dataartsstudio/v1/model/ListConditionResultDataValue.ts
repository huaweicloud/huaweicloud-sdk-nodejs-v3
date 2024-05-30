import { ConditionVO } from './ConditionVO';


export class ListConditionResultDataValue {
    public total?: number;
    public records?: Array<ConditionVO>;
    public constructor() { 
    }
    public withTotal(total: number): ListConditionResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<ConditionVO>): ListConditionResultDataValue {
        this['records'] = records;
        return this;
    }
}