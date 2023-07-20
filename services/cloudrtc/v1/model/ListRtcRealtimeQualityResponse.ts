import { TimeDoubleValueData } from './TimeDoubleValueData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRtcRealtimeQualityResponse extends SdkResponse {
    public quality?: Array<TimeDoubleValueData>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withQuality(quality: Array<TimeDoubleValueData>): ListRtcRealtimeQualityResponse {
        this['quality'] = quality;
        return this;
    }
    public withXRequestId(xRequestId: string): ListRtcRealtimeQualityResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}