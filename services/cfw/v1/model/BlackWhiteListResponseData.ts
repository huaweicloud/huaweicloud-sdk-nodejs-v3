import { BlackWhiteListResponseDataRecords } from './BlackWhiteListResponseDataRecords';


export class BlackWhiteListResponseData {
    public offset?: number;
    public limit?: number;
    public total?: number;
    public records?: Array<BlackWhiteListResponseDataRecords>;
    public constructor() { 
    }
    public withOffset(offset: number): BlackWhiteListResponseData {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): BlackWhiteListResponseData {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): BlackWhiteListResponseData {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<BlackWhiteListResponseDataRecords>): BlackWhiteListResponseData {
        this['records'] = records;
        return this;
    }
}