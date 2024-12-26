import { CustomerIpsListVO } from './CustomerIpsListVO';


export class PageInfoCustomerIpsListVO {
    public limit?: number;
    public offset?: number;
    public records?: Array<CustomerIpsListVO>;
    public total?: number;
    public constructor() { 
    }
    public withLimit(limit: number): PageInfoCustomerIpsListVO {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): PageInfoCustomerIpsListVO {
        this['offset'] = offset;
        return this;
    }
    public withRecords(records: Array<CustomerIpsListVO>): PageInfoCustomerIpsListVO {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): PageInfoCustomerIpsListVO {
        this['total'] = total;
        return this;
    }
}