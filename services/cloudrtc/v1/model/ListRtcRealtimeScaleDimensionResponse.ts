import { RealtimeScaleDimensionValue } from './RealtimeScaleDimensionValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRtcRealtimeScaleDimensionResponse extends SdkResponse {
    public dimensions?: Array<RealtimeScaleDimensionValue>;
    private 'X-request-id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withDimensions(dimensions: Array<RealtimeScaleDimensionValue>): ListRtcRealtimeScaleDimensionResponse {
        this['dimensions'] = dimensions;
        return this;
    }
    public withXRequestId(xRequestId: string): ListRtcRealtimeScaleDimensionResponse {
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