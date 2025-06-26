

export class ListServerHdaUpgradeRecordsRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListServerHdaUpgradeRecordsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListServerHdaUpgradeRecordsRequest {
        this['limit'] = limit;
        return this;
    }
}