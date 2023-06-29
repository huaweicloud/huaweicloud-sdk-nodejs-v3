

export class SearchQosHistoryMeetingsRequest {
    public startDate: number;
    public endDate: number;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public constructor(startDate?: any, endDate?: any) { 
        this['startDate'] = startDate;
        this['endDate'] = endDate;
    }
    public withStartDate(startDate: number): SearchQosHistoryMeetingsRequest {
        this['startDate'] = startDate;
        return this;
    }
    public withEndDate(endDate: number): SearchQosHistoryMeetingsRequest {
        this['endDate'] = endDate;
        return this;
    }
    public withOffset(offset: number): SearchQosHistoryMeetingsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchQosHistoryMeetingsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): SearchQosHistoryMeetingsRequest {
        this['searchKey'] = searchKey;
        return this;
    }
}