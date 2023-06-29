

export class SearchQosOnlineMeetingsRequest {
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public constructor() { 
    }
    public withOffset(offset: number): SearchQosOnlineMeetingsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchQosOnlineMeetingsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): SearchQosOnlineMeetingsRequest {
        this['searchKey'] = searchKey;
        return this;
    }
}