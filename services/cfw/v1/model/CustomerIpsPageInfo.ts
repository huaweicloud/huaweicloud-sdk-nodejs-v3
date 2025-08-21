import { CustomerIpsListVO } from './CustomerIpsListVO';


export class CustomerIpsPageInfo {
    public limit?: number;
    public offset?: number;
    public records?: Array<CustomerIpsListVO>;
    public total?: number;
    public constructor() { 
    }
    public withLimit(limit: number): CustomerIpsPageInfo {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): CustomerIpsPageInfo {
        this['offset'] = offset;
        return this;
    }
    public withRecords(records: Array<CustomerIpsListVO>): CustomerIpsPageInfo {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): CustomerIpsPageInfo {
        this['total'] = total;
        return this;
    }
}