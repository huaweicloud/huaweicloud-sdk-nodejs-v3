import { ApproverVO } from './ApproverVO';


export class ListApproversResultDataValue {
    public total?: number;
    public records?: Array<ApproverVO>;
    public constructor() { 
    }
    public withTotal(total: number): ListApproversResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<ApproverVO>): ListApproversResultDataValue {
        this['records'] = records;
        return this;
    }
}