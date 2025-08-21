import { AccountVO } from './AccountVO';


export class PageDataAccountVO {
    public limit?: number;
    public offset?: number;
    public records?: Array<AccountVO>;
    public total?: number;
    public constructor() { 
    }
    public withLimit(limit: number): PageDataAccountVO {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): PageDataAccountVO {
        this['offset'] = offset;
        return this;
    }
    public withRecords(records: Array<AccountVO>): PageDataAccountVO {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): PageDataAccountVO {
        this['total'] = total;
        return this;
    }
}