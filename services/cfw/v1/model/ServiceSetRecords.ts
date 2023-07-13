import { ServiceSet } from './ServiceSet';


export class ServiceSetRecords {
    public offset?: number;
    public limit?: number;
    public total?: number;
    public records?: Array<ServiceSet>;
    public constructor() { 
    }
    public withOffset(offset: number): ServiceSetRecords {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ServiceSetRecords {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ServiceSetRecords {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<ServiceSet>): ServiceSetRecords {
        this['records'] = records;
        return this;
    }
}