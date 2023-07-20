import { AbnormalEventDimensionValue } from './AbnormalEventDimensionValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRtcAbnormalEventDimensionResponse extends SdkResponse {
    public dimensions?: Array<AbnormalEventDimensionValue>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withDimensions(dimensions: Array<AbnormalEventDimensionValue>): ListRtcAbnormalEventDimensionResponse {
        this['dimensions'] = dimensions;
        return this;
    }
    public withXRequestId(xRequestId: string): ListRtcAbnormalEventDimensionResponse {
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