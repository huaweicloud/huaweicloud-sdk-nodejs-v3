import { BlackWhiteListResponseDataRecords } from './BlackWhiteListResponseDataRecords';


export class BlackWhiteListResponseData {
    private 'object_id'?: string | undefined;
    public offset?: number;
    public limit?: number;
    public total?: number;
    public records?: Array<BlackWhiteListResponseDataRecords>;
    public constructor() { 
    }
    public withObjectId(objectId: string): BlackWhiteListResponseData {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
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