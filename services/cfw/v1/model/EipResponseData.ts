import { EipResource } from './EipResource';


export class EipResponseData {
    public limit?: number;
    public offset?: number;
    public total?: number;
    public records?: Array<EipResource>;
    public constructor() { 
    }
    public withLimit(limit: number): EipResponseData {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): EipResponseData {
        this['offset'] = offset;
        return this;
    }
    public withTotal(total: number): EipResponseData {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<EipResource>): EipResponseData {
        this['records'] = records;
        return this;
    }
}