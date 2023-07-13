

export class SearchStatisticUserInfoRequest {
    public offset?: number;
    public limit?: number;
    public timeUnit: SearchStatisticUserInfoRequestTimeUnitEnum;
    public startTime: string;
    public endTime: string;
    public category: SearchStatisticUserInfoRequestCategoryEnum;
    public constructor(timeUnit?: any, startTime?: any, endTime?: any, category?: any) { 
        this['timeUnit'] = timeUnit;
        this['startTime'] = startTime;
        this['endTime'] = endTime;
        this['category'] = category;
    }
    public withOffset(offset: number): SearchStatisticUserInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchStatisticUserInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withTimeUnit(timeUnit: SearchStatisticUserInfoRequestTimeUnitEnum): SearchStatisticUserInfoRequest {
        this['timeUnit'] = timeUnit;
        return this;
    }
    public withStartTime(startTime: string): SearchStatisticUserInfoRequest {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: string): SearchStatisticUserInfoRequest {
        this['endTime'] = endTime;
        return this;
    }
    public withCategory(category: SearchStatisticUserInfoRequestCategoryEnum): SearchStatisticUserInfoRequest {
        this['category'] = category;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchStatisticUserInfoRequestTimeUnitEnum {
    D = 'D',
    M = 'M'
}
/**
    * @export
    * @enum {string}
    */
export enum SearchStatisticUserInfoRequestCategoryEnum {
    USER_LOGIN_INFO = 'user_login_info',
    USER_ACTIVATE_INFO = 'user_activate_info',
    USER_LOGIN_DEVICE_INFO = 'user_login_device_info'
}
