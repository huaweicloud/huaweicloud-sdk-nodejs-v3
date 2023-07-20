import { RtcHistoryQualityTimeValue } from './RtcHistoryQualityTimeValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRtcHistoryQualityResponse extends SdkResponse {
    public quality?: Array<RtcHistoryQualityTimeValue>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withQuality(quality: Array<RtcHistoryQualityTimeValue>): ListRtcHistoryQualityResponse {
        this['quality'] = quality;
        return this;
    }
    public withXRequestId(xRequestId: string): ListRtcHistoryQualityResponse {
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