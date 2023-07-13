import { RuleHitCountObject } from './RuleHitCountObject';


export class RuleHitCountRecords {
    public limit?: number;
    public offset?: number;
    public total?: number;
    public records?: Array<RuleHitCountObject>;
    public constructor() { 
    }
    public withLimit(limit: number): RuleHitCountRecords {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): RuleHitCountRecords {
        this['offset'] = offset;
        return this;
    }
    public withTotal(total: number): RuleHitCountRecords {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<RuleHitCountObject>): RuleHitCountRecords {
        this['records'] = records;
        return this;
    }
}