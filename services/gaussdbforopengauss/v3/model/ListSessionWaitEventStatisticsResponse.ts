import { SessionWaitEventStatisticInfo } from './SessionWaitEventStatisticInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSessionWaitEventStatisticsResponse extends SdkResponse {
    public total?: number;
    private 'wait_event_info'?: Array<SessionWaitEventStatisticInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSessionWaitEventStatisticsResponse {
        this['total'] = total;
        return this;
    }
    public withWaitEventInfo(waitEventInfo: Array<SessionWaitEventStatisticInfo>): ListSessionWaitEventStatisticsResponse {
        this['wait_event_info'] = waitEventInfo;
        return this;
    }
    public set waitEventInfo(waitEventInfo: Array<SessionWaitEventStatisticInfo>  | undefined) {
        this['wait_event_info'] = waitEventInfo;
    }
    public get waitEventInfo(): Array<SessionWaitEventStatisticInfo> | undefined {
        return this['wait_event_info'];
    }
}