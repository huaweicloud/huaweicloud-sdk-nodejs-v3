import { DomainSetVo } from './DomainSetVo';


export class ListDomainsetsResponseData {
    public limit?: number;
    public offset?: number;
    public total?: number;
    public records?: Array<DomainSetVo>;
    public constructor() { 
    }
    public withLimit(limit: number): ListDomainsetsResponseData {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDomainsetsResponseData {
        this['offset'] = offset;
        return this;
    }
    public withTotal(total: number): ListDomainsetsResponseData {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<DomainSetVo>): ListDomainsetsResponseData {
        this['records'] = records;
        return this;
    }
}