import { CustomerIpsListVO } from './CustomerIpsListVO';


export class HttpListCustomerIpsResponseData {
    public limit?: number;
    public offset?: number;
    public total?: number;
    public records?: Array<CustomerIpsListVO>;
    public constructor() { 
    }
    public withLimit(limit: number): HttpListCustomerIpsResponseData {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): HttpListCustomerIpsResponseData {
        this['offset'] = offset;
        return this;
    }
    public withTotal(total: number): HttpListCustomerIpsResponseData {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<CustomerIpsListVO>): HttpListCustomerIpsResponseData {
        this['records'] = records;
        return this;
    }
}