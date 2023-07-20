

export class SearchStatisticConferenceInfoRequest {
    public offset?: number;
    public limit?: number;
    public timeUnit?: SearchStatisticConferenceInfoRequestTimeUnitEnum | string;
    public startTime?: string;
    public endTime?: string;
    public category?: SearchStatisticConferenceInfoRequestCategoryEnum | string;
    public constructor(timeUnit?: string, startTime?: string, endTime?: string, category?: string) { 
        this['timeUnit'] = timeUnit;
        this['startTime'] = startTime;
        this['endTime'] = endTime;
        this['category'] = category;
    }
    public withOffset(offset: number): SearchStatisticConferenceInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchStatisticConferenceInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withTimeUnit(timeUnit: SearchStatisticConferenceInfoRequestTimeUnitEnum | string): SearchStatisticConferenceInfoRequest {
        this['timeUnit'] = timeUnit;
        return this;
    }
    public withStartTime(startTime: string): SearchStatisticConferenceInfoRequest {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: string): SearchStatisticConferenceInfoRequest {
        this['endTime'] = endTime;
        return this;
    }
    public withCategory(category: SearchStatisticConferenceInfoRequestCategoryEnum | string): SearchStatisticConferenceInfoRequest {
        this['category'] = category;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchStatisticConferenceInfoRequestTimeUnitEnum {
    D = 'D',
    M = 'M'
}
/**
    * @export
    * @enum {string}
    */
export enum SearchStatisticConferenceInfoRequestCategoryEnum {
    CONFERENCE_INFO = 'conference_info',
    CONFERENCE_HOURLY_INFO = 'conference_hourly_info'
}
