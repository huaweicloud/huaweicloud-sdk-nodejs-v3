import { TimeValueData } from './TimeValueData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRtcRealtimeScaleResponse extends SdkResponse {
    public scale?: Array<TimeValueData>;
    private 'X-request-id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withScale(scale: Array<TimeValueData>): ListRtcRealtimeScaleResponse {
        this['scale'] = scale;
        return this;
    }
    public withXRequestId(xRequestId: string): ListRtcRealtimeScaleResponse {
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