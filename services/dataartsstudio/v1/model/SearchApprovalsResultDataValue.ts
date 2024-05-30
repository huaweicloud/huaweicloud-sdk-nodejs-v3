import { ApprovalVO } from './ApprovalVO';


export class SearchApprovalsResultDataValue {
    public total?: number;
    public records?: Array<ApprovalVO>;
    public constructor() { 
    }
    public withTotal(total: number): SearchApprovalsResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<ApprovalVO>): SearchApprovalsResultDataValue {
        this['records'] = records;
        return this;
    }
}