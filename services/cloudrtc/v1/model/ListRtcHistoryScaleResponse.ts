import { RtcHistoryScaleTimeValue } from './RtcHistoryScaleTimeValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRtcHistoryScaleResponse extends SdkResponse {
    public scale?: Array<RtcHistoryScaleTimeValue>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withScale(scale: Array<RtcHistoryScaleTimeValue>): ListRtcHistoryScaleResponse {
        this['scale'] = scale;
        return this;
    }
    public withXRequestId(xRequestId: string): ListRtcHistoryScaleResponse {
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