import { SlowLogStatistics } from './SlowLogStatistics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSlowlogStatisticsResponse extends SdkResponse {
    public pageNumber?: number;
    public pageRecord?: number;
    public slowLogList?: Array<SlowLogStatistics>;
    public totalRecord?: number;
    public startTime?: number;
    public endTime?: number;
    public constructor() { 
        super();
    }
    public withPageNumber(pageNumber: number): ListSlowlogStatisticsResponse {
        this['pageNumber'] = pageNumber;
        return this;
    }
    public withPageRecord(pageRecord: number): ListSlowlogStatisticsResponse {
        this['pageRecord'] = pageRecord;
        return this;
    }
    public withSlowLogList(slowLogList: Array<SlowLogStatistics>): ListSlowlogStatisticsResponse {
        this['slowLogList'] = slowLogList;
        return this;
    }
    public withTotalRecord(totalRecord: number): ListSlowlogStatisticsResponse {
        this['totalRecord'] = totalRecord;
        return this;
    }
    public withStartTime(startTime: number): ListSlowlogStatisticsResponse {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: number): ListSlowlogStatisticsResponse {
        this['endTime'] = endTime;
        return this;
    }
}