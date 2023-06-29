

export class SearchStatisticResourceInfoRequest {
    public offset?: number;
    public limit?: number;
    public timeUnit: SearchStatisticResourceInfoRequestTimeUnitEnum;
    public startTime: string;
    public endTime: string;
    public category: SearchStatisticResourceInfoRequestCategoryEnum;
    public constructor(timeUnit?: any, startTime?: any, endTime?: any, category?: any) { 
        this['timeUnit'] = timeUnit;
        this['startTime'] = startTime;
        this['endTime'] = endTime;
        this['category'] = category;
    }
    public withOffset(offset: number): SearchStatisticResourceInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchStatisticResourceInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withTimeUnit(timeUnit: SearchStatisticResourceInfoRequestTimeUnitEnum): SearchStatisticResourceInfoRequest {
        this['timeUnit'] = timeUnit;
        return this;
    }
    public withStartTime(startTime: string): SearchStatisticResourceInfoRequest {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: string): SearchStatisticResourceInfoRequest {
        this['endTime'] = endTime;
        return this;
    }
    public withCategory(category: SearchStatisticResourceInfoRequestCategoryEnum): SearchStatisticResourceInfoRequest {
        this['category'] = category;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchStatisticResourceInfoRequestTimeUnitEnum {
    D = 'D',
    M = 'M'
}
/**
    * @export
    * @enum {string}
    */
export enum SearchStatisticResourceInfoRequestCategoryEnum {
    USED_VMR_INFO = 'used_vmr_info',
    USED_LIVE_INFO = 'used_live_info',
    USED_RECORD_INFO = 'used_record_info',
    USED_PSTN_INFO = 'used_pstn_info'
}
