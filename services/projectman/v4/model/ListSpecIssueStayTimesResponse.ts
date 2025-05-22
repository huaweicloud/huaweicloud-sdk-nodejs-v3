import { ListSpecIssueStayTimesResponseBodyData } from './ListSpecIssueStayTimesResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSpecIssueStayTimesResponse extends SdkResponse {
    public fails?: Array<string>;
    public data?: Array<ListSpecIssueStayTimesResponseBodyData>;
    private 'total_stay_time'?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withFails(fails: Array<string>): ListSpecIssueStayTimesResponse {
        this['fails'] = fails;
        return this;
    }
    public withData(data: Array<ListSpecIssueStayTimesResponseBodyData>): ListSpecIssueStayTimesResponse {
        this['data'] = data;
        return this;
    }
    public withTotalStayTime(totalStayTime: number): ListSpecIssueStayTimesResponse {
        this['total_stay_time'] = totalStayTime;
        return this;
    }
    public set totalStayTime(totalStayTime: number  | undefined) {
        this['total_stay_time'] = totalStayTime;
    }
    public get totalStayTime(): number | undefined {
        return this['total_stay_time'];
    }
    public withTotal(total: number): ListSpecIssueStayTimesResponse {
        this['total'] = total;
        return this;
    }
}