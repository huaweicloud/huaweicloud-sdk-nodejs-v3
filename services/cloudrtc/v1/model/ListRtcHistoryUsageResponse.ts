import { RtcHistoryUsage } from './RtcHistoryUsage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRtcHistoryUsageResponse extends SdkResponse {
    public usage?: Array<RtcHistoryUsage>;
    private 'X-request-id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withUsage(usage: Array<RtcHistoryUsage>): ListRtcHistoryUsageResponse {
        this['usage'] = usage;
        return this;
    }
    public withXRequestId(xRequestId: string): ListRtcHistoryUsageResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-id'];
    }
}