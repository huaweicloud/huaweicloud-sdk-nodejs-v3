import { TagsVO } from './TagsVO';


export class HttpGetAclTagResponseData {
    public offset?: number;
    public limit?: number;
    public total?: number;
    public records?: Array<TagsVO>;
    public constructor() { 
    }
    public withOffset(offset: number): HttpGetAclTagResponseData {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): HttpGetAclTagResponseData {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): HttpGetAclTagResponseData {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<TagsVO>): HttpGetAclTagResponseData {
        this['records'] = records;
        return this;
    }
}