import { TimeResourceUsageInfo } from './TimeResourceUsageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUsageDataResponse extends SdkResponse {
    public count?: number;
    private 'time_list'?: Array<TimeResourceUsageInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowUsageDataResponse {
        this['count'] = count;
        return this;
    }
    public withTimeList(timeList: Array<TimeResourceUsageInfo>): ShowUsageDataResponse {
        this['time_list'] = timeList;
        return this;
    }
    public set timeList(timeList: Array<TimeResourceUsageInfo>  | undefined) {
        this['time_list'] = timeList;
    }
    public get timeList(): Array<TimeResourceUsageInfo> | undefined {
        return this['time_list'];
    }
    public withXRequestId(xRequestId: string): ShowUsageDataResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}